import colors from '../component/Colors';

module.exports={
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:"red"
      },
      
      button: {
        height: 50,
        width: 300,
        backgroundColor: colors.primary,
        marginBottom: 10,
        borderRadius: 10,
      },
    
      buttonText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#EFEFEF',
        fontWeight: 'bold',
      },
    
      label: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
      },
    
      text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      userImage:{
          height:250,
          width:250
      }
}