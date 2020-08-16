import Toast from 'react-native-root-toast';
import {colors} from './Theme';

export default showToast = (msg)=>{
    Toast.show(msg,
      {
        backgroundColor:'white',
        textColor:colors.textPrimary,
        opacity:0.9,
        position:-60,
        shadowColor:colors.lightBackground
      })
}