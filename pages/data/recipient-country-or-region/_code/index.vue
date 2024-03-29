<template>
  <div>
    <DataBrowserNavbar />
    <h1>
      <span class="text-muted">{{ $t('dataDashboards.countries.for') }}</span> <b>{{ drilldownLabel }}</b>
    </h1>
    <hr />
    <b-row>
      <b-col>
        <DataBrowserFilter
          :exclude-filters="['recipient_country_or_region', 'transaction_type']"
          :setFields.sync="setFields"
          :currency.sync="currency"
          pageName="data-recipient-country-or-region-code"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2>{{ $t('dataDashboards.summary') }}</h2>
        <DataBrowser
          :drilldowns="['year.year']"
          :setFields="summarySetFields"
          :currency.sync="currency"
          bar-chart-height="300px"
          :show-number-results="false"
          :pageSize="null"
          orderBy="year.year" />
        <p class="text-muted font-italic">{{ $t('dataDashboards.spendSummaryChartText') }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <hr />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-2">
        <h2>{{ $t('dataDashboards.exploreTheData') }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" class="mt-2">
        <h3>{{ $t('by') }} {{ $tc('dataDashboards.availableDrilldowns.reporting_organisation') }}</h3>
        <DataBrowser
          :drilldowns="['reporting_organisation']"
          :setFields="setFields"
          :currency.sync="currency"
         />
      </b-col>
      <b-col md="6" class="mt-2">
        <h3>{{ $t('by') }} {{ $tc('dataDashboards.availableDrilldowns.sector_category') }}</h3>
        <DataBrowser
          :drilldowns="['sector_category']"
          :setFields="setFields"
          :currency.sync="currency"
         />
     </b-col>
    </b-row>
    <b-row>
      <b-col>
        <hr />
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" class="mt-2">
        <h3>{{ $t('by') }} {{ $tc('dataDashboards.availableDrilldowns.finance_type') }}</h3>
        <DataBrowser
          :drilldowns="['finance_type']"
          :setFields="setFields"
          :currency.sync="currency"
         />
      </b-col>
      <b-col md="6" class="mt-2">
        <h3>{{ $t('by') }} {{ $tc('dataDashboards.availableDrilldowns.aid_type') }}</h3>
        <DataBrowser
          :drilldowns="['aid_type']"
          :setFields="setFields"
          :currency.sync="currency"
         />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <hr />
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" class="mt-2">
        <h3>{{ $t('by') }} {{ $tc('dataDashboards.availableDrilldowns.reporting_organisation_type') }}</h3>
        <DataBrowser
          :drilldowns="['reporting_organisation_type']"
          :setFields="setFields"
          :currency.sync="currency"
         />
      </b-col>
      <b-col md="6" class="mt-2">
        <h3>{{ $t('by') }} {{ $tc('dataDashboards.availableDrilldowns.humanitarian') }}</h3>
        <DataBrowser
          :drilldowns="['humanitarian']"
          :setFields="setFields"
          :currency.sync="currency"
         />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <hr />
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" class="mt-2">
        <h3>{{ $t('by') }} {{ $t('dataDashboards.activity') }}</h3>
        <DataBrowser
          :drilldowns="['activity.iati_identifier', 'activity.title', 'reporting_organisation']"
          displayAs="table"
          :setFields="setFields"
          :currency.sync="currency"
         />
      </b-col>
    </b-row>
    <DataBrowserSource />
  </div>
</template>
<script>

import { mapState } from 'vuex'
import DataBrowser from '~/components/DataBrowser'
import DataBrowserFilter from '~/components/DataBrowserFilter'
import DataBrowserNavbar from '~/components/DataBrowserNavbar'
export default {
  components: { DataBrowser, DataBrowserFilter },
  data() {
    const lastYear = new Date().getFullYear()-1
    return {
      drilldown: 'recipient_country_or_region',
      drilldownValue: this.$route.params.code,
      setFields: {
        reporting_organisation: [],
        aid_type: [],
        finance_type: [],
        flow_type: [],
        transaction_type: ['3', '4', 'budget'],
        sector_category: [],
        sector: [],
        recipient_country_or_region: [this.$route.params.code],
        year: [lastYear],
        calendar_year_and_quarter: []
      },
      currency: 'usd'
    }
  },
  computed: {
    summarySetFields() {
      return {
        ...this.setFields,
        ...{
          year: this.calendarYears,
          calendar_year_and_quarter: [],
          transaction_type: ['3', '4', 'budget']
        }
      }
    },
    calendarYears() {
      var years = []
      const year = new Date().getFullYear()
      const range = (start, stop, step = 1) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
      return range(year-3, year+3).map(year => { return `${year}` })
    },
    drilldownLabel() {
      if (this.fields[this.drilldown].length == 0) {
        return ''
      }
      return this.fields[this.drilldown].filter(drilldown => {
        return drilldown.code === this.drilldownValue
      })[0].label
    },...mapState(['fields'])
  },
  mounted: function() {
    this.$store.dispatch('getCodelists')
  },
  head() {
    return {
      title: `${this.drilldownLabel} - ${this.$t('dataDashboards.countries.by')} - ${this.$t('dataDashboards.label')} - ${this.$t('title')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description')
        }
      ],
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  },
  watch: {
    '$i18n.locale'() {
      this.$store.dispatch('getCodelists')
    }
  }
}
</script>
