<template>
  <div class="date-picker-wrapper">
    <span class="title">{{ title }}</span>
    <date-range-picker
      ref="picker"
      :opens="datePickerData.opens"
      :locale-data="{ firstDay: 1, format: 'mm/dd/yyyy' }"
      :minDate="datePickerData.minDate"
      :maxDate="datePickerData.maxDate"
      :singleDatePicker="datePickerData.singleDatePicker"
      :timePicker="datePickerData.timePicker"
      :timePicker24Hour="datePickerData.timePicker24Hour"
      :showWeekNumbers="datePickerData.showWeekNumbers"
      :showDropdowns="datePickerData.showDropdowns"
      :autoApply="datePickerData.autoApply"
      v-model="datePickerData.dateRange"
      :ranges="datePickerData.show_ranges ? undefined : false"
      @update="updateValues"
      @toggle="checkOpen"
      :linkedCalendars="datePickerData.linkedCalendars"
      :dateFormat="datePickerData.dateFormat"
      :always-show-calendars="false"
      :alwaysShowCalendars="datePickerData.alwaysShowCalendars"
      :append-to-body="datePickerData.appendToBody"
      :closeOnEsc="datePickerData.closeOnEsc"
    >
      <div slot="input" slot-scope="picker" style="min-width: 350px">
        {{ picker.startDate | date }} - {{ picker.endDate | date }}
      </div>
    </date-range-picker>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import moment from "moment";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  components: {
    DateRangePicker,
  },
  props: ["title"],
  filters: {
    date(value) {
      if (!value) return "";

      let options = { year: "numeric", month: "numeric", day: "numeric" };
      return Intl.DateTimeFormat("en-US", options).format(value);
    },
  },
  data() {
    return {
      datePickerData: {
        opens: "right",
        minDate: "2019-05-02 04:00:00",
        maxDate: "2020-12-26 14:00:00",
        // minDate: '',
        // maxDate: '',
        dateRange: {
          startDate: "2019-12-10",
          endDate: "2019-12-20",
        },
        show_ranges: true,
        singleDatePicker: false,
        timePicker: true,
        timePicker24Hour: true,
        showDropdowns: true,
        autoApply: false,
        showWeekNumbers: true,
        linkedCalendars: true,
        alwaysShowCalendars: true,
        appendToBody: false,
        closeOnEsc: true,
      },
    };
  },
  methods: {
    updateValues(values) {
      console.log("event: update", { ...values });
      this.datePickerData.dateRange.startDate = moment(values.startDate).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      this.datePickerData.dateRange.endDate = moment(values.endDate).format(
        "YYYY-MM-DD HH:mm:ss"
      );
    },
    checkOpen(open) {
      console.log("event: open", open);
    },
    dateFormat(classes, date) {
      let yesterday = moment().subtract(1, "day");
      if (!classes.disabled) {
        classes.disabled = moment(date).isSame(yesterday, "day");
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
.date-picker-wrapper {
  .title {
    font-size: 1.2rem;
    line-height: 2.2rem;
    font-weight: 600;
    color: var(--typo-light);
    margin-right: 2rem;
  }
}
.vue-daterange-picker {
  .daterangepicker {
    top: 100%;
    .yearselect {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
      margin-left: 2rem;
    }
    select.monthselect {
      -webkit-appearance: menulist;
      width: 30%;
    }
    .ranges li.active {
      background: var(--primary-color);
    }
    td.active,
    td.active:hover {
      background-color: var(--primary-color);
    }
    .drp-buttons .btn {
      padding: 0.6rem 1.5rem;
      &.cancelBtn {
        background: #fff;
        color: var(--typo-para);
        padding: 0.6rem 1.5rem;
        border-color: var(--border-color);
      }
    }
    &.show-calendar .drp-buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
.date-picker-wrapper {
  .vue-daterange-picker {
    .reportrange-text {
      position: relative;
      font-size: 1.2rem;
      line-height: 2.2rem;
      color: var(--typo-para);
      font-weight: 500;
      padding: 0.4rem 6rem 0.4rem 1.5rem;
      border: 0.1rem solid var(--border-color);
      border-radius: var(--radius);
      > div {
        min-width: auto !important;
      }

      &::after {
        content: url("/img/icon-datepicker.svg");
        position: absolute;
        top: 0.6rem;
        right: 1.5rem;
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
  .daterangepicker .calendar-time {
    display: none;
  }
}
.mx-1,
.ml-1 {
  margin-left: 0.25rem;
}
.mx-1,
.mr-1 {
  margin-right: 0.25rem;
}
</style>