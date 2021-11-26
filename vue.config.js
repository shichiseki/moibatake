module.exports = {
    devServer: {

        // localhostでvueからexpressにAPIリクエストを送信する為の設定
        proxy:{
            '/api': {
                target:'http://localhost:5000',
                changeOrigin: true,
            },
        },
        watchOptions: {
            poll: true
          }
    
}
}