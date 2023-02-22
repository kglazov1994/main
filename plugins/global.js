export default (_, inject) => {
    inject('global', {
        // пример
        // log(text,type = 'log'){
        //     console[type](text);
        // }
        // использование в компонентах
        // this.$global.log('test') => console.log('test');
        // this.$global.log('test','error') => console.error('test');
    })
}
