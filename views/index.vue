<template>
	<div>
		<iheader></iheader>
		<inav></inav>
		<h3 class="index-title">推荐商家</h3>
		<shop-list :dis_op="true"></shop-list>
		<bnav :aindex="0"></bnav>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				shopList_p:[],
			}
		},
		created(){
			
		},
		mounted(){

		},
		components:{
			iheader: function (resolve) {
                //异步组件写法
                require(['../components/index_header.vue'], resolve)
            },
            inav: function (resolve) {
                //异步组件写法
                require(['../components/index_nav.vue'], resolve)
            },
            shopList: function (resolve) {
                //异步组件写法
                require(['../components/shopList.vue'], resolve)
            },
            bnav: function (resolve) {
                //异步组件写法
                require(['../components/navBar.vue'], resolve)
            },
		}
	}
</script>
<style>
html,body{
	background-color: #f0f0f0;
}
.index-title {
    margin-top: .266667rem;
    line-height: .906667rem;
    font-weight: 600;
    border-top: 1px solid #eee;
    font-size: .4rem;
    padding-left: .4rem;
}
.foodentry-wrapper, .index-title {
    border-bottom: 1px solid #eee;
    background-color: #fff;
}
a{
	text-decoration: none;
}
</style>