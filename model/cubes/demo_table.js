cube(`demo_table`, {
  sql_table: `public.demo_table`,

  data_source: `default`,

  joins: {},

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },

    name: {
      sql: `name`,
      type: `string`,
    },

    value: {
      sql: `value`,
      type: `string`,
    },

    timestamp: {
      sql: `timestamp`,
      type: `time`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },
    totalValue: {
      type: `sum`,
      sql: `CAST(${CUBE}.value AS numeric)`,
      title: `Total Value`,
    },
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
