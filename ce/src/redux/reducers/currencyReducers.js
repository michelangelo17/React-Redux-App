import {
  SET_BASE_CURRENCY,
  SET_BASE_COUNTRY_NAME,
  GET_RATES_START,
  GET_RATES_SUCCESS,
  GET_RATES_ERROR,
  SET_SECOND_COUNTRY_NAME,
  SET_COMPARISON_CURRENCY,
  FIND_SELECTED_RATE,
  RESET_COMPARISON_CURRENCY,
} from '../actions/currencyActions'

const initialState = {
  currencyOptions: [
    {
      currencyCode: 'AED',
      currencyName: 'UAE Dirham',
      countries: ['United Arab Emirates'],
    },
    {
      currencyCode: 'ARS',
      currencyName: 'Argentine Peso',
      countries: ['Argentina'],
    },
    {
      currencyCode: 'AUD',
      currencyName: 'Australian Dollar',
      countries: ['Australia'],
    },
    {
      currencyCode: 'BGN',
      currencyName: 'Bulgarian Lev',
      countries: ['Bulgaria'],
    },
    {
      currencyCode: 'BRL',
      currencyName: 'Brazilian Real',
      countries: ['Brazil'],
    },
    {
      currencyCode: 'BSD',
      currencyName: 'Bahamian Dollar',
      countries: ['Bahamas'],
    },
    {
      currencyCode: 'CAD',
      currencyName: 'Canadian Dollar',
      countries: ['Canada'],
    },
    {
      currencyCode: 'CHF',
      currencyName: 'Swiss Franc',
      countries: ['Switzerland'],
    },
    {
      currencyCode: 'CLP',
      currencyName: 'Chilean Peso',
      countries: ['Chile'],
    },
    {
      currencyCode: 'CNY',
      currencyName: 'Chinese Renminbi',
      countries: ['China'],
    },
    {
      currencyCode: 'COP',
      currencyName: 'Colombian Peso',
      countries: ['Colombia'],
    },
    {
      currencyCode: 'CZK',
      currencyName: 'Czech Koruna',
      countries: ['Czech Republic'],
    },
    {
      currencyCode: 'DKK',
      currencyName: 'Danish Krone',
      countries: ['Denmark'],
    },
    {
      currencyCode: 'DOP',
      currencyName: 'Dominican Peso',
      countries: ['Dominican Republic'],
    },
    {
      currencyCode: 'EGP',
      currencyName: 'Egyptian Pound',
      countries: ['Egypt'],
    },
    {
      currencyCode: 'EUR',
      currencyName: 'Euro',
      countries: [
        'Germany',
        'Austria',
        'Belgium',
        'Cyprus',
        'Estonia',
        'Finland',
        'France',
        'Greece',
        'Ireland',
        'Italy',
        'Latvia',
        'Lithuania',
        'Luxembourg',
        'Malta',
        'Netherlands',
        'Portugal',
        'Slovakia',
        'Slovenia',
        'Spain',
      ],
    },
    {
      currencyCode: 'FJD',
      currencyName: 'Fiji Dollar',
      countries: ['Fiji'],
    },
    {
      currencyCode: 'GBP',
      currencyName: 'Pound Sterling',
      countries: ['United Kingdom'],
    },
    {
      currencyCode: 'GTQ',
      currencyName: 'Guatemalan Quetzal',
      countries: ['Guatemala'],
    },
    {
      currencyCode: 'HKD',
      currencyName: 'Hong Kong Dollar',
      countries: ['Hong Kong'],
    },
    {
      currencyCode: 'HRK',
      currencyName: 'Croatian Kuna',
      countries: ['Croatian'],
    },
    {
      currencyCode: 'HUF',
      currencyName: 'Hungarian Forint',
      countries: ['Hungary'],
    },
    {
      currencyCode: 'IDR',
      currencyName: 'Indonesian Rupiah',
      countries: ['Indonesia'],
    },
    {
      currencyCode: 'ILS',
      currencyName: 'Israeli Shekel',
      countries: ['Israel'],
    },
    {
      currencyCode: 'INR',
      currencyName: 'Indian Rupee',
      countries: ['India'],
    },
    {
      currencyCode: 'ISK',
      currencyName: 'Icelandic Krona',
      countries: ['Iceland'],
    },
    {
      currencyCode: 'JPY',
      currencyName: 'Japanese Yen',
      countries: ['Japan'],
    },
    {
      currencyCode: 'KRW',
      currencyName: 'South Korean Won',
      countries: ['Korea'],
    },
    {
      currencyCode: 'KZT',
      currencyName: 'Kazakhstani Tenge',
      countries: ['Kazakhstan'],
    },
    {
      currencyCode: 'MXN',
      currencyName: 'Mexican Peso',
      countries: ['Mexico'],
    },
    {
      currencyCode: 'MYR',
      currencyName: 'Malaysian Ringgit',
      countries: ['Malaysia'],
    },
    {
      currencyCode: 'NOK',
      currencyName: 'Norwegian Krone',
      countries: ['Norway'],
    },
    {
      currencyCode: 'NZD',
      currencyName: 'New Zealand Dollar',
      countries: ['New Zealand'],
    },
    {
      currencyCode: 'PAB',
      currencyName: 'Panamanian Balboa',
      countries: ['Panama'],
    },
    {
      currencyCode: 'PEN',
      currencyName: 'Peruvian Nuevo Sol',
      countries: ['Peru'],
    },
    {
      currencyCode: 'PHP',
      currencyName: 'Philippine Peso',
      countries: ['Philippines'],
    },
    {
      currencyCode: 'PKR',
      currencyName: 'Pakistani Rupee',
      countries: ['Pakistan'],
    },
    {
      currencyCode: 'PLN',
      currencyName: 'Polish Zloty',
      countries: ['Poland'],
    },
    {
      currencyCode: 'PYG',
      currencyName: 'Paraguayan Guarani',
      countries: ['Paraguay'],
    },
    {
      currencyCode: 'RON',
      currencyName: 'Romanian Leu',
      countries: ['Romania'],
    },
    {
      currencyCode: 'RUB',
      currencyName: 'Russian Ruble',
      countries: ['Russian Federation'],
    },
    {
      currencyCode: 'SAR',
      currencyName: 'Saudi Riyal',
      countries: ['Saudi Arabia'],
    },
    {
      currencyCode: 'SEK',
      currencyName: 'Swedish Krona',
      countries: ['Sweden'],
    },
    {
      currencyCode: 'SGD',
      currencyName: 'Singapore Dollar',
      countries: ['Singapore'],
    },
    {
      currencyCode: 'THB',
      currencyName: 'Thai Baht',
      countries: ['Thailand'],
    },
    {
      currencyCode: 'TRY',
      currencyName: 'Turkish Lira',
      countries: ['Turkey'],
    },
    {
      currencyCode: 'TWD',
      currencyName: 'New Taiwan Dollar',
      countries: ['Taiwan'],
    },
    {
      currencyCode: 'UAH',
      currencyName: 'Ukrainian Hryvnia',
      countries: ['Ukraine'],
    },
    {
      currencyCode: 'USD',
      currencyName: 'US Dollar',
      countries: ['United States'],
    },
    {
      currencyCode: 'UYU',
      currencyName: 'Uruguayan Peso',
      countries: ['Uruguay'],
    },
    {
      currencyCode: 'VND',
      currencyName: 'Vietnamese Dong',
      countries: ['Vietnam'],
    },
    {
      currencyCode: 'ZAR',
      currencyName: 'South African Rand',
      countries: ['South Africa'],
    },
  ],
  firstCountryName: '',
  baseCurrency: {},
  allRates: {},
  isLoading: false,
  error: null,
  secondCountryName: null,
  comparisonCurrency: {},
  selectedExchangeRate: null,
}

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASE_COUNTRY_NAME:
      return {
        ...state,
        firstCountryName: action.payload,
      }
    case SET_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: state.currencyOptions.filter(currency =>
          currency.countries.find(country => country === action.payload)
        )[0],
      }
    case SET_SECOND_COUNTRY_NAME:
      return {
        ...state,
        secondCountryName: action.payload,
      }
    case SET_COMPARISON_CURRENCY:
      return {
        ...state,
        comparisonCurrency: state.currencyOptions.filter(currency =>
          currency.countries.find(country => country === action.payload)
        )[0],
      }
    case RESET_COMPARISON_CURRENCY:
      return {
        ...state,
        secondCountryName: null,
        comparisonCurrency: {},
        selectedExchangeRate: null,
      }
    case FIND_SELECTED_RATE:
      return {
        ...state,
        selectedExchangeRate:
          state.allRates[state.comparisonCurrency.currencyCode],
      }
    case GET_RATES_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_RATES_SUCCESS:
      return {
        ...state,
        allRates: action.payload,
        isLoading: false,
      }
    case GET_RATES_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}
