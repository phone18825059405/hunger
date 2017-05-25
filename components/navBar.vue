<template>
<div class="index-footer_Gtduid_">
	<a href="index.html" class="index-footerTab_bl0lbJN">
		<svg class="index-footerTabIcon_1EbB8wS">
			<use v-if="activeIndex!=0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index-regular.b245d60"></use>
			<use v-if="activeIndex==0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index.18edf5a"></use>		
		</svg>
		<span class="index-footerTabText_1It8yh0 index-footerTabTextActive_3gjOLc6">外卖</span>
	</a>
	<a href="orders.html" class="index-footerTab_bl0lbJN">
		<svg class="index-footerTabIcon_1EbB8wS">
			<use v-if="activeIndex!=1" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order-regular.41c17f8"></use>
			<use v-if="activeIndex==1" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order.070ae2a"></use>
		</svg>
		<span class="index-footerTabText_1It8yh0">订单</span>
	</a>
	<a href="personal.html" class="index-footerTab_bl0lbJN">
		<svg class="index-footerTabIcon_1EbB8wS">
			<use v-if="activeIndex!=2" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile-regular.c151d62"></use>
			<use v-if="activeIndex==2" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile.dbc5ebf"></use>
		</svg>
		<span class="index-footerTabText_1It8yh0">我的</span>
	</a>
</div>
</template>
<script>
	export default {
		data(){
			return{
				activeIndex:null,
			}
		},
		created(){
			this.activeIndex = this.$props.aindex;
		},
		props:{
			aindex:[String,Number]
		}
	}
</script>
<style lang="sass">
.index-footer_Gtduid_ {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
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
    padding-top: .12rem;
    background-color: #fff;
    height: 1.333333rem;
    box-shadow: 0 -.026667rem .053333rem rgba(0,0,0,.1);
}.index-footerTab_bl0lbJN {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    text-align: center;
}.index-footerTabIcon_1EbB8wS {
    width: .533333rem;
    height: .533333rem;
}.index-footerTabTextActive_3gjOLc6 {
    color: #0089dc;
}
.index-footerTabText_1It8yh0 {
    display: block;
    color: #666;
    font-size: .266667rem;
}
</style>