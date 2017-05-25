<template>
    <div>
        <header class="ElemeHeader-wrapper_3axzyZv" data-v-3d8ac645="">
        <div class="ElemeHeader-wrapper_3axzyZv" style="background: rgb(0, 151, 255);">
            <a href="javascript:history.back()" class="ElemeHeader-left_2Jd8GcR">
                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use></svg>
            </a>
            <h1 class="ElemeHeader-center__Vl_mYE">{{title}}</h1> 
        </div>
        </header>
        <shop-list :dis_op="false" :rurl="'https://mainsite-restapi.ele.me/shopping/restaurants'" :isSearch="false"></shop-list>
    </div>

</template>
<script>
	export default{
		data(){
			return{
                title:'',
			}
		},
		methods:{
		},
		filters:{

		},
		created(){
            this.title = decodeURIComponent(window.location.search.match(/title=([^&]+)/)[1]);
		},
		mounted(){
		},
        components:{
            shopList: function (resolve) {
                //异步组件写法
                require(['../components/shopList.vue'], resolve)
            },
        }
	}
</script>
<style lang="sass">
.ElemeHeader-wrapper_3axzyZv {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 1.173333rem;
    color: #fff;
    font-size: .48rem;
}.ElemeHeader-wrapper_3axzyZv {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 1.173333rem;
    color: #fff;
    font-size: .48rem;
}.ElemeHeader-left_2Jd8GcR {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 1.173333rem;
    height: 1.173333rem;
}.ElemeHeader-left_2Jd8GcR svg {
    display: block;
    width: .586667rem;
    height: .586667rem;
}.ElemeHeader-center__Vl_mYE {
    position: absolute;
    top: 0;
    left: 50%;
    height: 1.173333rem;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.173333rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
</style>