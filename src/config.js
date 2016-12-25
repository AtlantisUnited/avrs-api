import nconf from 'nconf'

nconf.argv().env({ separator: '_', lowerCase: true })

nconf.defaults({
  db: {
    host: 'postgres',
    database: 'avrs',
    username: 'root',
    password: 'password',
    dialect: 'postgres',
  },
  redis: {
    host: 'redis',
  },
  mailer: {
    service: 'yandex',
    auth: {
      user: 'devmailersender',
      pass: 'Pt23sdfaE_r',
    },
    from: 'devmailersender@yandex.ru',
  },
  auth: {
    secret: 'Dev secret string',
  },
  shop: {
    url: 'https://www.aversis-shop.com/',
    secret: '6959bfc3f2e47b86',
  },
  recaptcha: {
    siteKey: '6Ldkrw8UAAAAALVD730V83tTVeY72KHULjPo-TvO',
    secretKey: '6Ldkrw8UAAAAAOJxaUxJ89Fxz8wo6TGBWad8clRN',
  },
  servicePlans: [
    {
      id: 'mbasis',
      type: 'basis',
      period: 30,
      time: 10,
      price: 25,
      profitability: 20,
      profitabilityPerDay: 1,
      profitabilityPerHour: 0.1,
      profit: 5,
      amount: 30,
      memory: 1024,
      cpu: 5,
      productId: '5',
    },
    {
      id: 'mstandard',
      type: 'standard',
      period: 30,
      time: 12,
      price: 50,
      profitability: 20,
      profitabilityPerDay: 2,
      profitabilityPerHour: 0.17,
      profit: 10,
      amount: 60,
      memory: 2048,
      cpu: 15,
    },
    {
      id: 'mpremium',
      type: 'premium',
      period: 30,
      time: 15,
      price: 150,
      profitability: 20,
      profitabilityPerDay: 6,
      profitabilityPerHour: 0.4,
      profit: 30,
      amount: 180,
      memory: 3072,
      cpu: 20,
    },
    {
      id: 'mbusiness',
      type: 'business',
      period: 30,
      time: 20,
      price: 250,
      profitability: 20,
      profitabilityPerDay: 10,
      profitabilityPerHour: 0.5,
      profit: 50,
      amount: 300,
      memory: 4096,
      cpu: 40,
    },
    {
      id: 'qbasis',
      type: 'basis',
      period: 90,
      time: 10,
      price: 75,
      profitability: 25,
      profitabilityPerDay: 1.04,
      profitabilityPerHour: 0.104,
      profit: 18.75,
      amount: 93.75,
      memory: 1024,
      cpu: 5,
    },
    {
      id: 'qstandard',
      type: 'standard',
      period: 90,
      time: 12,
      price: 150,
      profitability: 25,
      profitabilityPerDay: 2.08,
      profitabilityPerHour: 0.17,
      profit: 37.5,
      amount: 187.50,
      memory: 2048,
      cpu: 15,
    },
    {
      id: 'qpremium',
      type: 'premium',
      period: 90,
      time: 15,
      price: 450,
      profitability: 30,
      profitabilityPerDay: 6.5,
      profitabilityPerHour: 0.43,
      profit: 135,
      amount: 585,
      memory: 3072,
      cpu: 20,
    },
    {
      id: 'qbusiness',
      type: 'business',
      period: 90,
      time: 20,
      price: 750,
      profitability: 30,
      profitabilityPerDay: 10.83,
      profitabilityPerHour: 0.54,
      profit: 225,
      amount: 975,
      memory: 4096,
      cpu: 40,
    },
    {
      id: 'hbasis',
      type: 'basis',
      period: 180,
      time: 10,
      price: 150,
      profitability: 40,
      profitabilityPerDay: 1.17,
      profitabilityPerHour: 0.117,
      profit: 60,
      amount: 210,
      memory: 1024,
      cpu: 5,
    },
    {
      id: 'hstandard',
      type: 'standard',
      period: 180,
      time: 12,
      price: 300,
      profitability: 40,
      profitabilityPerDay: 2.33,
      profitabilityPerHour: 0.19,
      profit: 120,
      amount: 420,
      memory: 2048,
      cpu: 15,
    },
    {
      id: 'hpremium',
      type: 'premium',
      period: 180,
      time: 15,
      price: 900,
      profitability: 50,
      profitabilityPerDay: 7.5,
      profitabilityPerHour: 0.5,
      profit: 450,
      amount: 1350,
      memory: 3072,
      cpu: 20,
    },
    {
      id: 'hbusiness',
      type: 'business',
      period: 180,
      time: 20,
      price: 1500,
      profitability: 60,
      profitabilityPerDay: 13.33,
      profitabilityPerHour: 0.67,
      profit: 900,
      amount: 2400,
      memory: 4096,
      cpu: 40,
    },
    {
      id: 'ybasis',
      type: 'basis',
      period: 365,
      time: 10,
      price: 300,
      profitability: 80,
      profitabilityPerDay: 1.48,
      profitabilityPerHour: 0.148,
      profit: 240,
      amount: 540,
      memory: 1024,
      cpu: 5,
    },
    {
      id: 'ystandard',
      type: 'standard',
      period: 365,
      time: 12,
      price: 600,
      profitability: 80,
      profitabilityPerDay: 2.96,
      profitabilityPerHour: 0.25,
      profit: 480,
      amount: 1080,
      memory: 2048,
      cpu: 15,
    },
    {
      id: 'ypremium',
      type: 'premium',
      period: 365,
      time: 15,
      price: 1800,
      profitability: 80,
      profitabilityPerDay: 8.88,
      profitabilityPerHour: 0.59,
      profit: 1440,
      amount: 3240,
      memory: 3072,
      cpu: 20,
    },
    {
      id: 'ybusiness',
      type: 'business',
      period: 365,
      time: 20,
      price: 3000,
      profitability: 80,
      profitabilityPerDay: 14.79,
      profitabilityPerHour: 0.74,
      profit: 2400,
      amount: 5400,
      memory: 4096,
      cpu: 40,
    },
  ],
})

export default nconf
