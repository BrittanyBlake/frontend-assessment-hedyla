import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  legalLink: {
    ...typography.caption,
    justifyContent: 'center',
    color:
      palette.type === 'dark'
        ? 'rgba(255,255,255,0.57)'
        : palette.text.secondary,
    position: 'relative',
    [breakpoints.up('sm')]: {
      '&:not(:first-of-type)': {
        '&:before': {
          content: '"|"',
          display: 'block',
          position: 'absolute',
          left: 0,
          bottom: 0,
        },
      },
    },
  },
  newsletter: {
    fontSize: typography.caption.fontSize,
  },
  navMenu: {
    flexWrap: 'wrap',
  },
}));

export default useStyles;
