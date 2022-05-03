import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    menu: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    minimaze: {
        right: 0,
        top: 0,
        width: '20%',
        height: '100%',
        position: 'absolute',
    },
    line: {
        height: 40,
        width: 2,
        backgroundColor: '#fff',
        position: 'absolute',
        right:10
    },
    lines:{
        padding:7,
        height: 40,
        width: 2,
        position: 'absolute',
        top: '40%',
        right:0,
    }
});
