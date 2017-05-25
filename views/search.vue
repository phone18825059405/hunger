<template>
    <div>
        <div keyword="" shoplists="" geohash="wtw3sjq6n6um" v-if="!searchState">
            <form class="searchHeader"><input type="search" autofocus="autofocus" placeholder="请输入商品名称" class="headerInput" @search="toSearch"></form>
            <section class="history-27588_1">
                <span>历史搜索</span><i class="history-3O8OW_1" @click="claerHistoryTags"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bin"></use></svg></i>
            </section>
            <section class="history-3g0h8_1">
                <a v-for="tag in historyTags" :href="'search.html?keyword=' + tag.word" class="history-3DGei_1">
                  {{tag.word}}
                </a><!---->
            </section>
            <section class="history-27588_1"><span>热门搜索</span></section>
            <section class="history-3g0h8_1">
                <a v-for="tag in hotTags" :href="'search.html?keyword=' + tag.word" class="history-3DGei_1">
                  {{tag.word}}
                </a><!---->
            </section>
        </div>
        <shop-list v-if="searchState" :dis_op="false" :isSearch="true"></shop-list>
    </div>
</template>
<script>
	export default{
		data(){
			return{
                hotTags:[],
                historyTags:[],
                searchState:null,
			}
		},
		methods:{
            toSearch(event){
                var arr;

                if(localStorage.hungerHistoryTages){
                    arr = JSON.parse(localStorage.hungerHistoryTages)
                }else{
                    arr = [];
                }

                arr.push({word:event.target.value})
                localStorage.hungerHistoryTages = JSON.stringify(arr);

                window.location.href = 'search.html?keyword=' + event.target.value
            },
            claerHistoryTags(){
                localStorage.hungerHistoryTages = '';
                this.historyTags = [];
            }
		},
		filters:{

		},
        components:{
            shopList: function (resolve) {
                //异步组件写法
                require(['../components/shopList.vue'], resolve)
            },
        },
		created(){
            if(/keyword/.test(window.location.search)){
                this.searchState = true;
            }
            this.$http.get('https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=31.23037&longitude=121.473701').then(function(response){
                this.hotTags = response.body;
            })
            if(localStorage.hungerHistoryTages){
                if(localStorage.hungerHistoryTages != ''){
                    this.historyTags = this.historyTags.concat(JSON.parse(localStorage.hungerHistoryTages));
                }
            }          
		},
		mounted(){
		},
	}
</script>
<style lang="sass">
    .searchHeader {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: #0097fa;
    border-bottom: 1px solid #eee;
    padding: .293333rem;
}.searchHeader {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: #0097fa;
    border-bottom: 1px solid #eee;
    padding: .293333rem;
}button, input, select, textarea {
    outline: 0;
    border: none;
    font-size: inherit;
    font-family: inherit;
}.headerInput {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    border: 1px solid #eee;
    border-radius: .4rem;
    background: #f2f2f2;
    outline: none;
    padding: .213333rem;
    font-size: .373333rem;
    color: #666;
}.headerInput {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    border: 1px solid #eee;
    border-radius: .4rem;
    background: #f2f2f2;
    outline: none;
    padding: .213333rem;
    font-size: .373333rem;
    color: #666;
}.history-27588_1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .346667rem;
    padding: .2rem .333333rem;
    color: #666;
}.history-3O8OW_1 {
    display: block;
    padding-top: .053333rem;
}.history-3O8OW_1 svg {
    height: .32rem;
    width: .32rem;
    color: #cecece;
    fill: currentColor;
}.history-3g0h8_1 {
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    background: #fff;
    padding: 0 .333333rem .333333rem;
}.history-3DGei_1 {
    color: #666;
    display: inline-block;
    height: .666667rem;
    line-height: .666667rem;
    border-radius: .066667rem;
    padding: 0 .2rem;
    font-size: .32rem;
    margin-right: .333333rem;
    margin-top: .333333rem;
    border: 1px solid #ddd;
}
</style>