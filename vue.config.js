module.exports = {
    devServer: {

        // localhostでvueからexpressにAPIリクエストを送信する為の設定
        proxy:{
            '/': {
                target:'http://localhost:3000',
                changeOrigin: true,
            },
        },
        watchOptions: {
            poll: true
          }
    
},
}