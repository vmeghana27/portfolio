import { css } from 'glamor';
import heroImage from './hero_img.png'

let heroStyles = css({
    display: 'flex',
    backgroundColor: 'antiquewhite',
    flexWrap: 'wrap-reverse',
    position: 'relative',
    padding: '50px 0px 0px 0px',
    justifyContent: 'space-around',
})

let textStyles = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    color:'black',
    ' i': {
        fontSize: '50px',
        color: '#4c3827'
    },
    ' div': {
        padding: '30px 30px',
        maxWidth: '550px',
        display: 'flex',
        flexDirection: 'column',
        ' p:first-child': {
            fontSize: '46px',
            color: '#4c3827',
            marginBottom: '0px',
        },
        ' p:last-child' : {
            fontSize: '35px',
            paddingRight: '214px',
            opacity: '0.5',
        },
        ' :last-child': {
            marginLeft: 'auto'
        }
    },
    '@media screen and (max-width: 720px)': {
        width: '100%',
        boxShadow: '0px -3px 10px rgba(0 0 0 / 40%)',
        backgroundColor: 'white'
    }
})

let downloadStyles = css({
    border: '1px solid #4c3827',
    borderRadius: '63px',
    backgroundColor: '#4c3827',
    color: 'white',
    padding: '15px !important',
    marginBottom: '40px',
    transition: 'transform .2s',
    ':hover': {
        transform: 'scale(1.2)',
        cursor: 'pointer'
    },
})

let imgStyles = css({
    minHeight: '35rem',
    position: 'relative',
    width: '30%',
    background: `url(${heroImage})`,
    backgroundRepeat: 'no-repeat',
    minWidth: '283px',
    backgroundSize: '280px'
})

export { heroStyles, imgStyles, textStyles, downloadStyles }