const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [
    // './index.html',
    // './html/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        'mh-pp1': '44rem',
      },
      fontFamily: {
        'ppPoppins': ['Poppins', ...defaultTheme.fontFamily.sans],
        'ppMontserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'pp-blue': {
          DEFAULT: 'rgb(5, 117, 181)',
          
        },
        'pp-green': {
          DEFAULT: 'rgb(3, 174, 156)',
          // dark: 'rgb(88, 146, 26)'
          dark: 'rgb(5, 160, 144)'
        },
        'pp-orange': {
          DEFAULT: 'rgb(255, 164, 6)'
        },
        'pp-gray': {
          DEFAULT: 'rgb(45, 50, 58)',
          dark: 'rgb(64, 75, 89)',
          '100': 'rgb(244, 244, 244)',
          '200': 'rgb(229, 231, 235)',
          '300': 'rgb(200,201,204)'
        },
        'pp-navy': {
          DEFAULT: 'rgb(35, 47, 68)'
        },
        'pp-pink': {
          DEFAULT: 'rgb(245, 107, 107)'
        },
        'pp-black': {
          DEFAULT: 'rgb(31, 41, 55)'
        }
      },
      typography: (theme)=>({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: theme('fontWeight.bold'),
              fontSize: theme('fontSize.2xl'),
              marginBottom: '0rem',
              textTransform: 'uppercase',
              '@screen sm': {
                fontSize: theme('fontSize.3xl'),
              },
              '@screen lg': {
                fontSize: theme('fontSize.4xl'),
              },
              '&.no-prose': {
                marginBottom: '0.5rem'
              }
            },
            h2: {
              fontSize: theme('fontSize.2xl'),
              fontWeight: theme('fontWeight.bold'),
              margin: '1rem 0 0 0',
              '&.no-prose': {
                marginBottom: '0.25rem'
              }
            },
            h3:{
              fontSize: theme('fontSize.lg'),
              fontWeight: theme('fontWeight.medium'),
              margin: '1rem 0 0 0',
              '&.pp-orange': {
                color: 'rgb(255, 164, 6)'
              }
            },
            h4:{
              margin: '1rem 0 0 0'
            },
            p: {
              margin: '0.25rem 0.25rem 1rem 0rem',
              lineHeight: '1.5rem',
              '&.no-prose': {
                marginBottom: '0.25rem'
              },
            },
            a: {
              color: 'rgb(5, 117, 181)',
              textDecoration: 'none',
              '&.underline': {
                textDecoration: 'underline'
              },
              '&:hover': {
                textDecoration: 'underline'
              },
              '&.no-prose': {
                '&:hover': {
                  textDecoration: 'none'
                }
              }
            },
            img: {
              '&.no-prose': {
                marginTop: '0rem',
                marginBottom: '0rem'
              }
            },
            'ul, ol': {
              '&.no-prose': {
                'li::before':{
                  display: 'none'
                },
                
              },
              '&.no-top':{
                marginTop: '0.25rem'
              },
              '&.no-padding': {
                li: {
                  padding: '0rem'
                }
              }
            },
          }
        }
        
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    
    plugin(function({addComponents, addUtilities, theme}){
      const newUtilities = {
        '.h-75-vh': {
          height: '75vh'
        },
        '.h-85-vh': {
          height: '85vh'
        },
        '.h-95-vh': {
          height: '95vh'
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
      const ads = {
        '.ad-container': {
            padding: '0',
            backgroundColor: 'transparent',
            color: 'rgb(45, 50, 58)',
            margin: '1rem auto'
        },
        '.ad-top-page': {
          maxWidth: '20rem',
          '@screen lg': {
            maxWidth: '45.5rem'
          }
        },
        '.ad-right-side': {

        },
        '.ad-text': {
          color: 'rgb(112, 112, 112)',
          fontFamily: "'segoe UI'",
          fontSize: '14px'
        },
      };
      const badges = {
        '.badge': {
          // fontWeight: theme('fontWeight.bold'),
          border: '1px solid rgb(64, 75, 89)',
          borderRadius: '9999px',
          padding: '0.25rem 1rem',
          margin: '0rem 1rem'
        },
        '.badge-icon':{
          padding:'0.25rem 2rem 0.25rem 1rem'
        },
        '.badge-green': {
          backgroundColor: 'rgb(3, 174, 156)',
          borderColor: 'rgb(3, 174, 156)',
          color: theme('colors.white')
        },
        '.badge-gray': {
          backgroundColor: 'rgb(64, 75, 89)',
          borderColor: 'rgb(64, 75, 89)',
          color: theme('colors.white')
        }

      };

      // tag card
      const tagCard = {
        '.tag-card': {
          backgroundColor: 'rgb(244, 244, 244)',
          padding: '0.35rem 0.6rem',
          borderLeft: '4px solid transparent',
          marginTop: '0.5rem',
          marginBottom: '0.5rem',
          '@screen lg': {
            marginRight: '1rem',
            marginTop: '0rem'
          }
        },
        '.tag-card-breeder': {
          borderColor: 'rgb(3, 174, 156)',
          'min-width' : '12rem',
          
        },
        '.tag-card-white':{
          backgroundColor: 'rgb(255, 255, 255)'
        },
        '.tag-card-logo':{
          padding: '0rem',
          '& img': {
            height: '3.5rem',
            width: 'auto'
          }
        }

      };

      // characteristics card
      const charCard = {
        '.char-card': {
          backgroundColor: 'rgb(244, 244, 244)',
          borderRadius: theme('borderRadius.lg'),
          padding: '0.35rem',
          boxShadow: theme('boxShadow.lg'),
          "& p":{
            padding: "0px",
            margin: '0 0.25rem'
          }
        },
        '.char-card-white':{
          backgroundColor: 'rgb(255, 255, 255)'
        }
        
      };

      // characteristics bar
      const charBar = {
        '.char-bar-container': {
          position: 'relative',
          paddingBottom: '2rem',
          marginBottom: '1rem',
          p: {
            fontSize: theme('fontSize.sm'),
            fontWeight: theme('fontWeight.semibold'),
          },
          'p:nth-of-type(1)': {
            marginBottom:0
          },
          'p:nth-of-type(2)': {
            marginBottom:'1.5rem'
          },
        },
        '.char-bar': {
          overflow: 'hidden',
          backgroundColor: 'rgb(229, 231, 235)',
          height: theme('height.3'),
          fontSize: theme('fontSize.sm'),
          display: 'flex',
          borderRadius: theme('borderRadius.full')
        },
        '.char-bar-indicator': {
          backgroundColor: 'rgb(3, 174, 156)',
          borderRadius: theme('borderRadius.full'),
          display:'flex',
          flexDirection: 'column',
          whiteSpace: 'no-wrap',
          justifyContent: 'center'
        },
        '.char-bar-attribute': {
          // font-light text-gray-800 absolute bottom-0 truncate
          color: 'rgb(31, 41, 55)',
          position: 'absolute',
          bottom: '-1rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
        
        
      };

      const chips = {
        // chips
        '.chip': {
          borderColor: 'rgb(45, 50, 58)',
          borderWidth: '1px',
          background: '#ffffff',
          borderRadius: theme('borderRadius.md'),
          padding: '0.25rem 0.75rem',
          margin : '0 0.5rem 0.5rem 0',
          whiteSpace: 'nowrap',
          fontWeight: theme('fontWeight.medium'),
        },
        '.chip-green': {
          borderColor: 'rgb(3, 174, 156)',
          background: 'rgb(3, 174, 156)',
          color: 'white',
          borderRadius: theme('borderRadius.full'),
          padding: '0rem 2rem',
          margin : '0'
        },
        '.chip-gray': {
          borderColor: 'rgb(64, 75, 89)',
          background: 'rgb(64, 75, 89)',
          color: 'white',
          borderRadius: theme('borderRadius.full'),
          padding: '0rem 2rem',
          margin : '0'
        },
        '.chip-orange': {
          borderColor: 'rgb(255, 164, 6)',
          background: 'rgb(255, 164, 6)',
          color: 'white',
          borderRadius: theme('borderRadius.full'),
          padding: '0rem 2rem',
          margin : '0'
        },
        
      };

      const navTab = {
        '.navtab': {
          backgroundColor: 'rgb(255, 255, 255)',
          fontWeight: 'bold',
          '&.navtab-alt': {
            backgroundColor: 'rgb(244, 244, 244)'
          }
        },
        '.navtab-green': {
          color: 'rgb(3, 174, 156)',
          '&:hover':{
            textDecoration: 'underline'
          },
          '&.active': {
            color: 'rgb(255, 255, 255)',
            backgroundColor: 'rgb(3, 174, 156)',
            fontWeight: 'normal'
          }
        }
      };

      addComponents([ads, badges, tagCard, charCard, charBar, chips, navTab]);
    })
  ],
}
