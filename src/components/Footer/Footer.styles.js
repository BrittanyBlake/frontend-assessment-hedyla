import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography, palette }) => ({
  legalLink: {
    ...typography.caption,
    justifyContent: 'center',
    color:
      palette.type === 'dark'
        ? 'rgba(255,255,255,0.57)'
        : palette.text.secondary,
    position: 'relative',
  },
  newsletter: {
    fontSize: typography.caption.fontSize,
  },
  navMenu: {
    flexWrap: 'wrap',
  },
}));

export default useStyles;
