<template>
	<div>
		<div class="shop-header-container_qVoLT_0" v-if="shopInf">
			<div class="shop-header-background_2cwiR_0">
			</div>
			<nav class="shop-header-navBar_ibFIP_0"><a href="javascript:history.back()" style="display: inline-block;"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use></svg></a></nav>
			<div class="shop-header-main_1B2kH_0">
				<img class="shop-header-logo_3woDQ_0" :src="shopInf.image_path | img_142">
				<div class="shop-header-content_3UjPs_0" @click="showTarget('shopDetailState',$event)">
					<h2 class="shop-header-shopName_2QrHh_0">{{shopInf.name}}</h2>
					<p class="shop-header-delivery_1mcTe_0">
						<span class="shop-header-deliveryItem_Fari3_0" v-if="shopInf.delivery_mode">
	            {{shopInf.delivery_mode.text || ''}}
						</span><span class="shop-header-deliveryItem_Fari3_0">
	            {{shopInf.order_lead_time}}分钟送达
						</span><span class="shop-header-deliveryItem_Fari3_0">
	            配送费¥{{shopInf.float_delivery_fee}}
						</span>
					</p>
					<div class="shop-header-notice_2DzmG_0">
						<span>公告：</span><span>
	            欢迎光临，用餐高峰期请提前下单，谢谢。
						</span>
					</div>
				</div>
				<svg  @click="showTarget('shopDetailState',$event)" class="shop-header-detailIcon_1IXZI_0"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
			</div>
			<div class="shop-header-activities_3NWG9_0">
				<div class="activity-container_2EaDo_0 activity-containerNoWrap_2zBBg_0 shop-header-activityRow_fbfAg_0">
					<i class="activity-activityIcon_1iJyG_0" style="background-color: rgb(240, 115, 115); color: rgb(255, 255, 255); border-color: rgb(240, 115, 115);">减
					</i><span class="activity-description_2q8qg_0"><span>{{primaryActive.description}}</span></span>
				</div>
				<div class="shop-header-activityCount_tCsbf_0">{{shopInf.activities.length}}个活动</div>
			</div>
		</div>
		<div class="shop-tab-container_3skq8_0">
			<div :class="['shop-tab-tab_r4SDi_0', curTab==0?'shop-tab-active_ZY0C0_0':'']" :data-tab="0" @click="changeTab"><span class="shop-tab-title_1crD1_0">商品</span></div>
			<div :class="['shop-tab-tab_r4SDi_0', curTab==1?'shop-tab-active_ZY0C0_0':'']" :data-tab="1" @click="changeTab"><span class="shop-tab-title_1crD1_0">评价</span></div>
		</div>
		<div class="menuview-2hUkG" ref="main" v-show="curTab == 0">
			<div class="menuview-17K3g">
				<div class="menuview-i6fQ3">
					<ul class="menucategory-29kyE menuview-2_lFf">
						<li v-for="(item,index) in shopInfo" :class="[curCategory==index?'menucategory-JnDmc':'', 'menucategory-3e27M']" :data-index="index" @click="scrollToTarget">
							<img v-if="item.type == 2" class="menucategory-375ij" src="https://fuss10.elemecdn.com/5/da/3872d782f707b4c82ce4607c73d1ajpeg.jpeg?imageMogr/format/webp/thumbnail/18x/">
							<img v-if="item.type == 3" class="menucategory-375ij" src="https://fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg?imageMogr/format/webp/thumbnail/18x/">
							<span v-if="item.curcQun>0" class="menucategory-28BIn">{{item.curcQun}}</span>
							<span class="menucategory-qwsbd">{{item.name}}</span>
						</li>
					</ul>
					<section data-v-f433384a="" class="container menuview-JqDMu" category-index="1">
						<div data-v-f433384a="" class="scroller" ref="scroller">
							<dl v-for="(item,index) in shopInfo" data-v-f433384a="" class="" :data-index="index">
								<dt data-v-f433384a="">
									<div data-v-f433384a="" class="category-title">
										<strong data-v-f433384a="" class="category-name">{{item.name}}</strong><span data-v-f433384a="" class="category-description">{{item.description}}</span>
									</div>
									<div data-v-f433384a="" class="category-more">
										<span data-v-f433384a="" class="icon"></span>
										<p data-v-f433384a="" transition="popup" class="popup" style="display: none;">
											<span data-v-f433384a="">{{item.name}}</span><span data-v-f433384a="">{{item.description}}</span>
										</p>
									</div>
								</dt>
								<dd v-for="food in item.foods" data-v-f433384a="" class=""><span data-v-f433384a="" class="foodimg"><img v-if="food.image_path" data-v-f433384a="" :src="food.image_path|img_weather"></span>
									<section data-v-f433384a="" class="foodinfo">
									<header data-v-f433384a="" class="foodtitle"><span data-v-f433384a="">{{food.name}}</span></header>
									<p data-v-f433384a="" class="fooddescription">{{food.description}}</p>
									<p data-v-f433384a="" class="foodsales">
										<span data-v-f433384a="">月售{{food.month_sales}}份</span><span data-v-f433384a="">好评率{{food.satisfy_rate}}%</span>
									</p>
									<!----><strong data-v-f433384a="" class="foodprice"><span data-v-f433384a="">{{food.specfoods[0].price}}</span><!----><!----><!----></strong>
									<div data-v-f433384a="" class="cartbutton">
										<span class="cartbutton-2tycR" v-if="isOpenTime">
											<a v-if="food.curQun>0" href="javascript:" :data-item_id="food.item_id" @click.stop="minusFood"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use></svg></a>
											<span v-if="food.curQun>0" class="cartbutton-2OSi7">{{food.curQun}}</span> 
											<a href="javascript:" :data-item_id="food.item_id" @click.stop="addFood"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use></svg></a>
										</span>
									</div>
									</section>
								</dd>
							</dl>
						</div>
					</section>
				</div>
				<footer class="cartview-216zx">
					<transition name="fade">
						<div class="cartview-bIr0V" style="z-index: 10;" v-show="foodListState" @click="toggleTarget('foodListState',$event)">
						</div>
					</transition>
					<transition name="bottomIn">
						<div :class="['cartview-JFaw9',foodListState?'cartview-2CbR7':'']" style="z-index: 11;" v-show="foodListState">
							<section class="discount-tip-1sl_7_0">此处为原价，「去结算」享优惠哦</section>
							<div class="cartview-37dYf">
								<span class="cartview-2IL0z">购物车</span><!----><a href="javascript:" class="cartview-3ElqP"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove"></use></svg><span>清空</span></a>
							</div>
							<div class="entityList-yrs9v_0">
								<!---->
								<ul>
									<li v-for="order in orderList" class="entityList-1eODF_0">
										<span class="entityList-30u-R_0"><em class="entityList-2g5ra_0">{{order.name}}</em><!----><!----><!---->
										<p class="entityList-1IZul_0">
										</p>
										</span><span class="entityList-1vr8H_0"><span class="entityList-1XZvm_0">{{order.specfoods[0].price}}</span></span>
										<span class="entityList-3cAE9_0">
										<span class="cartbutton-2tycR" v-if="isOpenTime">
											<a href="javascript:" :data-item_id="order.item_id" @click.stop="minusFood"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use></svg></a>
											<span class="cartbutton-2OSi7">{{order.curQun }}</span>
											<a href="javascript:" :data-item_id="order.item_id" @click.stop="addFood"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use></svg></a></span>
										</span>
									</li>
								</ul>
								<div class="entityList-1eODF_0 entityList-2NcdP_0" v-if="extra>0">
									<span class="entityList-30u-R_0">餐盒</span><span class="entityList-1vr8H_0">{{extra}}</span><span class="entityList-3cAE9_0"></span>
								</div>
							</div>
						</div>
					</transition>
					<div class="bottomNav-3XM6c_0" style="z-index: 11;" @click.stop="toggleTarget('foodListState',$event)">
						<span :attr-quantity="totalQun" class="bottomNav-18KRG_0" ref="icon_Cart"></span>
						<div>
							<p class="bottomNav-3Ak_E_0">
								<span>¥{{totalPrice}}</span><!---->
							</p>
							<p class="bottomNav-3zqFz_0" v-if="shopInf">
								配送费¥{{shopInf.float_delivery_fee}}
							</p>
						</div>
						<a href="javascript:" :class="['bottomNav-1urxC_0', orderList.length&&isOpenTime?'':'bottomNav-9FCIh_0']" @click.stop="createOrder">{{isOpenTime?'去结算':'商家休息中'}}</a>
					</div>
				</footer>
			</div>
		</div>
		<div class="index-container_GB9-L_0" ref="ratingWrapper"  v-show="curTab == 1">
			<section class="overview-container_3D2TN_0" v-if="rating_score" >
				<div class="overview-col1_28mQz_0">
					<strong class="overview-overallScore_1gbf5_0">{{rating_score.overall_score.toFixed(1)}}</strong>
					<div>
						综合评价
					</div>
					<p class="overview-small_3zU_U_0">
						高于周边商家{{parseInt(rating_score.compare_rating*100)}}%
					</p>
				</div>
				<div class="overview-col2_1_8Bk_0">
					<div class="overview-line_36TKo_0">
						<span>服务态度</span>
						<span class="overview-lineContent_3LAEC_0">
						<div class="rating-wrapper_36aX1_0">
							<div class="rating-max_1MKzt_0">
								<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
							</div>
							<div class="rating-rating_1ZAfX_0" style="width: 97.7002%;">
								<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
							</div>
						</div>
						<span class="overview-lineScore_FKvKk_0">{{rating_score.service_score.toFixed(1)}}</span></span>
					</div>
					<div class="overview-line_36TKo_0">
						<span>菜品评价</span>
						<span class="overview-lineContent_3LAEC_0">
						<div class="rating-wrapper_36aX1_0">
							<div class="rating-max_1MKzt_0">
								<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
							</div>
							<div class="rating-rating_1ZAfX_0" style="width: 92.2128%;">
								<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
							</div>
						</div>
						<span class="overview-lineScore_FKvKk_0">{{rating_score.food_score.toFixed(1)}}</span></span>
					</div>
					<div class="overview-line_36TKo_0">
						<span>送达时间</span>
						<span class="overview-lineContent_3LAEC_0 overview-small_3zU_U_0">
				        {{rating_score.deliver_time}}分钟
						</span>
					</div>
				</div>
			</section>
			<section class="index-rateDetail_3mb4t_0">
				<div class="index-tagBlock_1B49c_0">
					<ul>
						<li v-for="tag in rating_tags" :class="['rating-tags-item_2MAXu_0', tag.name==curTag?'rating-tags-active_1Q92x_0':'' ]" :data-text="tag.name" @click="changeRating">{{tag.name}}({{tag.count}})</li>
					</ul>
				</div>
				<ul infinite-scroll-distance="20" v-if="ratings">
					<li v-for="rating in ratings" class="index-comment_3xWea_0">
						<div class="comment-block-container_2KCP2_0">
							<small class="comment-block-time_uW1Rk_0">{{rating.rated_at}}</small><img class="comment-block-avatar_jhxbX_0" src="https://fuss10.elemecdn.com/f/2e/20a4300d40b97e98a5889591fb1f2jpeg.jpeg?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/">
							<div class="comment-block-content_3gX7e_0">
								<h3 class="comment-block-username_2KPtB_0">{{rating.username}}</h3>
								<div class="rating-wrapper_36aX1_0">
									<div class="rating-max_1MKzt_0">
										<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
									</div>
									<div class="rating-rating_1ZAfX_0" style="width: 100%;">
										<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
									</div>
								</div>
								<span class="comment-block-rating_2xaJx_0"></span>
								<div class="comment-block-text_1GGd4_0">{{rating.rating_text}}</div>
								<!---->
								<ul class="comment-block-photos_2MUUP_0">
									<li v-for="img in rating.item_ratings" v-if="img.image_hash!=''"><img :src="img.image_hash | img_142"></li>
								</ul>
								<div>
									<ul class="comment-block-foods_3a4co_0">
										<li v-for="text in rating.item_ratings">{{text.food_name}}</li>
									</ul>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</section>
		</div>
		<transition name="fade">
			<div class="modal-container_1qSDG_0" v-if="shopDetailState">
				<div class="bulletin-modal-container_3dL1X_0" v-if="shopInf">
					<h2>{{shopInf.name}}</h2>
					<h2>
					<div class="bulletin-modal-rating_mAg8E_0">
						<div class="rating-wrapper_36aX1_0">
							<div class="rating-max_1MKzt_0">
								<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
							</div>
							<div class="rating-rating_1ZAfX_0" :style="{width:shopInf.rating*20 + '%'}">
								<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
							</div>
						</div>
					</div>
					</h2>
					<h3 class="bulletin-modal-subtitle_17A0B_0"><span>优惠信息</span></h3>
					<ul>
						<li v-for="active in shopInf.activities">
						<div class="activity-container_2EaDo_0 activity-containerWrap_12dyC_0">
							<i class="activity-activityIcon_1iJyG_0" style="background-color: rgb(240, 115, 115); color: rgb(255, 255, 255); border-color: rgb(240, 115, 115);">
				    减
							</i><span class="activity-description_2q8qg_0"><span>{{active.description}}</span></span>
						</div>
						</li>
					</ul>
					<h3 class="bulletin-modal-subtitle_17A0B_0"><span>商家公告</span></h3>
					<div>
				      欢迎光临，用餐高峰期请提前下单，谢谢。
					</div>
				</div>
				<div class="bulletin-modal-close_u5_7x_0" @click="hideTarget('shopDetailState',$event)"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#res-x"></use></svg></div>
			</div>
		</transition>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				shopId:null,
				isloading:false,
				shopInfo:[],
				foodListState:false,
				shopDetailState:false,
				totalQun:0,
				totalPrice:0,
				orderList:[],
				ratings:[],
				rating_score:null,
				rating_tags:[],
				curTag:'全部',
				curTab:0,
				curCategory:0,
				shopInf:null,
				extra:0,
				primaryActive:null,
				isOpenTime:false,//在营业时间内
			}
		},
		props:{
			rurl:String,
		},
		filters:{
			img_weather(value){
				return 'https://fuss10.elemecdn.com/' + value.slice(0,1) + '/' + value.slice(1,3) + '/' + value.slice(3) + '.'+value.match(/jpeg|png/)[0]+'?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/';
			},
			img_142(value){
				return 'https://fuss10.elemecdn.com/' + value.slice(0,1) + '/' + value.slice(1,3) + '/' + value.slice(3) + '.'+value.match(/jpeg|png/)[0]+'?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/';
			},
			img_shop(value){
				return 'https://fuss10.elemecdn.com/' + value.slice(0,1) + '/' + value.slice(1,3) + '/' + value.slice(3) + '.'+value.match(/jpeg|png/)[0]+'?imageMogr/format/webp/thumbnail/!40p/blur/50x40/';
			}

		},
		methods:{
			loadShopList(){
				var that = this;
				this.isloading = true;
				const start = new Date()*1;
                console.log('加载中......')
				this.$http.get('https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id='+this.shopId).then(function(response){

					this.shopInfo = this.shopInfo.concat(response.body)

					this.shopInfo.forEach(function(item,index){
						if(item.type == 1){
							that.$set(that.shopInfo[index],'curcQun',0)
						}						
						item.foods.forEach(function(item1,index1){
							that.$set(that.shopInfo[index]['foods'][index1],'curQun',0)
							//that.shopInfo[index]['foods'][index1].curQun = 1;

						})
					})

					//读取缓存
					if(localStorage.hungerCache){
						var cache = JSON.parse(localStorage.hungerCache);
						if(!cache.authentic_id) return;
						if(cache.authentic_id == that.shopId){
							for(var i in cache){
								that[i] = cache[i];													
							}
							console.log(cache.orderList)
							for(var j in cache.orderList){
								that.shopInfo.forEach(function(item){
									item.foods.forEach(function(item1){
										if(item1.item_id == cache.orderList[j].item_id){
											item1.curQun = cache.orderList[j].curQun;
											item.curcQun += cache.orderList[j].curQun;
										}
									})
								})
							}
						}
					}

					this.isloading = false;
					const end = new Date()*1;
                    console.log('加载完成！耗时:'+(end-start)/1000+'秒')

				},function(error){
					this.isloading = false;
					console.log('加载失败')
				})
			},
			loadRatingScore(){
				var that = this;

				this.$http.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+this.shopId+'/ratings/scores').then(function(response){

					this.rating_score = response.body;

					this.isloading = false;

				},function(error){
					this.isloading = false;
					console.log('加载评分失败')
				})
			},
			loadRating(){
				var that = this;

				this.$http.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+this.shopId+'/ratings?has_content=true&offset=0&limit=10').then(function(response){

					this.ratings =  this.ratings.concat(response.body);

					this.isloading = false;

				},function(error){
					this.isloading = false;
					console.log('加载评价失败')
				})
			},
			loadShopInfo(){
				var that = this;

				this.$http.get('https://mainsite-restapi.ele.me/shopping/restaurant/'+ this.shopId +'?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&latitude=31.23037&longitude=121.473701').then(function(response){

					response.body.activities.forEach(function(item){
						if(item.is_exclusive_with_food_activity && item.description){
							that.primaryActive = item;
						}
					})

					this.shopInf = response.body;

					var openTime = response.body.opening_hours[0].replace(/:/g,'.').split('/');
					var nowTime = new Date();
						nowTime = nowTime.getHours() +'.' + nowTime.getMinutes();
					if(nowTime*1 > openTime[0]*1 && nowTime*1 <openTime[1]*1){
						this.isOpenTime = true;
					}
					console.log('营业时间？: '+this.isOpenTime)

					this.isloading = false;

				},function(error){
					this.isloading = false;
					console.log('加载评价标签失败')
				})
			},
			loadRatingTags(){

				var that = this;

				this.$http.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+this.shopId+'/ratings/tags').then(function(response){

					this.rating_tags = response.body;

					this.isloading = false;

				},function(error){
					this.isloading = false;
					console.log('加载评价标签失败')
				})				
			},
			changeRating(event){

				var that = this;

				this.curTag = event.currentTarget.getAttribute('data-text');

				this.$http.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+this.shopId+'/ratings?has_content=true&tag_name='+decodeURIComponent(event.currentTarget.getAttribute('data-text'))+'&offset=0&limit=10').then(function(response){

					this.ratings = response.body;					

					this.isloading = false;

				},function(error){
					this.isloading = false;
					console.log('加载评价标签失败')
				})
				
			},
			changeTab(event){
				this.curTab = event.currentTarget.getAttribute('data-tab')
			},
			toggleTarget(target,event){
				this[target] = !this[target];
			},
			showTarget(target,event){
				this[target] = true;
			},
			hideTarget(target,event){
				this[target] = false;
			},
			countTotal(){
				var that = this;
				var temp = 0;
				var e = 0
				this.orderList.forEach(function(item){
					temp += (item.curQun * item.specfoods[0].price);
					e += item.specfoods[0].packing_fee;
				})
				this.totalPrice = temp;
				this.extra = e;
			},
			addFood(event){
				
				var targetId = event.currentTarget.getAttribute('data-item_id')
				console.log(targetId)
				var that = this;
				this.shopInfo.forEach(function(item,index){
					item.foods.forEach(function(item1,index1){
						if(item1.item_id == targetId){
							if(that.shopInfo[index]['foods'][index1].curQun >= 0){
								that.shopInfo[index]['foods'][index1].curQun ++;

								if(that.orderList.length == 0){
									console.log('uuuuuuuuuu')
									that.orderList.push(that.shopInfo[index]['foods'][index1])
									return;
								}else{
									var isFound = false;
									console.log('eeeeeeeee ')
									that.orderList.forEach(function(item2){
										if(item2.item_id == targetId){
											 isFound = true;
											 console.log(item.curQun)
											 console.log( that.shopInfo[index]['foods'][index1].curQun)
											 item2.curQun = that.shopInfo[index]['foods'][index1].curQun;
											 return;
										}
									})
									if(!isFound){
										that.orderList.push(that.shopInfo[index]['foods'][index1])
									}
								}
																

								if(item.type == 1){
									that.shopInfo[index].curcQun ++;
									that.totalQun ++;
								}								
							}else{
								that.shopInfo[index]['foods'][index1].curQun = 1;
							}
						}
					})				
				})

				this.$refs.icon_Cart.classList.add('bottomNav-3oMX6_0');
				setTimeout(function(){
					that.$refs.icon_Cart.classList.remove('bottomNav-3oMX6_0');
				},500)
				this.countTotal();
				
			},
			minusFood(event){
				
				var targetId = event.currentTarget.getAttribute('data-item_id')
				console.log(targetId)
				var that = this;
				this.shopInfo.forEach(function(item,index){
					item.foods.forEach(function(item1,index1){
						if(item1.item_id == targetId){
							if(that.shopInfo[index]['foods'][index1].curQun >= 0){
								that.shopInfo[index]['foods'][index1].curQun --;


								that.orderList.forEach(function(item2,index2){
									if(item2.item_id == targetId){
										 item2.curQun = that.shopInfo[index]['foods'][index1].curQun;
										 if(that.shopInfo[index]['foods'][index1].curQun == 0){
											that.orderList.splice(index2,1)
										 }
									}
								})


								if(item.type == 1){
									that.shopInfo[index].curcQun --;
									that.totalQun --
								}
							}else{
								that.shopInfo[index]['foods'][index1].curQun = 0;
							}
						}
					})
				})
				this.countTotal();
				
			},
			scrollToTarget(event){
				this.$refs.scroller.scrollTop = this.$refs.scroller.children[event.currentTarget.getAttribute('data-index')].offsetTop;
				this.curCategory = event.currentTarget.getAttribute('data-index');
			},
			createOrder(){
				if(!this.isOpenTime) return;
				var t = {};
				t.shopInfo = this.shopInf;
				t.extra = this.extra;
				t.orderList = this.orderList;
				localStorage.hungerOrder = JSON.stringify(t);
				location.href = "order.html";
			}

		},
		created(){
			var that = this;

			this.shopId = location.search.match(/id=([0-9]+)/)[1];

			this.loadShopInfo();

			this.loadShopList();

			this.loadRatingScore();

			this.loadRatingTags();

			this.loadRating();

		},
		mounted(){
			this.$refs.ratingWrapper.style.height = this.$refs.main.style.height = window.innerHeight - this.$refs.main.offsetTop +'px';

			var that = this;
			window.addEventListener('beforeunload',function(){
				if(!that.orderList.length) return;
				var t = {};
				t.authentic_id = that.shopInf.authentic_id;
				t.totalQun = that.totalQun;
				t.totalPrice = that.totalPrice;
				t.orderList = that.orderList;
				t.extra = that.extra;
				localStorage.hungerCache = JSON.stringify(t);
			})		
		},
	}
</script>
<style lang="sass">
a{
	text-decoration: none;
}
/**/
.bottomIn-enter-active, .bottomIn-leave {
    -webkit-transition: transform 200ms ease;
    transition: transform 200ms ease;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
.bottomIn-enter, .bottomIn-leave-active{
	-webkit-transition: transform 200ms ease;
	transition: transform 200ms ease;
    -webkit-transform: translate3d(0,100%,0);
    transform: translate3d(0,100%,0);
}

.fade-enter, .fade-leave-active {
	opacity: 0;
}

.bottomNav-18KRG_0.bottomNav-3oMX6_0 {
	-webkit-animation: bottomNav-3oMX6_0 .5s ease-in-out;
	animation: bottomNav-3oMX6_0 .5s ease-in-out
}

@-webkit-keyframes bottomNav-3oMX6_0 {
	0% {
		-webkit-transform: scale(1);
		transform: scale(1)
	}

	25% {
		-webkit-transform: scale(.8);
		transform: scale(.8)
	}

	50% {
		-webkit-transform: scale(1.1);
		transform: scale(1.1)
	}

	75% {
		-webkit-transform: scale(.9);
		transform: scale(.9)
	}

	to {
		-webkit-transform: scale(1);
		transform: scale(1)
	}
}

@keyframes bottomNav-3oMX6_0 {
	0% {
		-webkit-transform: scale(1);
		transform: scale(1)
	}

	25% {
		-webkit-transform: scale(.8);
		transform: scale(.8)
	}

	50% {
		-webkit-transform: scale(1.1);
		transform: scale(1.1)
	}

	75% {
		-webkit-transform: scale(.9);
		transform: scale(.9)
	}

	to {
		-webkit-transform: scale(1);
		transform: scale(1)
	}
}
/**/
.shop-header-container_qVoLT_0 {
    position: relative;
    padding-bottom: .8rem;
    color: #fff;
    font-size: .293333rem;
}.shop-header-background_2cwiR_0 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #3190e8;
    background-size: cover;
    background-repeat: no-repeat;
}.shop-header-background_2cwiR_0:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(119,103,137,.43);
}.shop-header-navBar_ibFIP_0 {
    position: relative;
    padding: .106667rem .266667rem;
}.shop-header-navBar_ibFIP_0 svg {
    width: .666667rem;
    height: .666667rem;
}.shop-header-main_1B2kH_0 {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}.shop-header-logo_3woDQ_0 {
    width: 1.733333rem;
    height: 1.733333rem;
    border: 1px solid #fff;
    border-radius: .106667rem;
    margin: 0 .266667rem;
}.shop-header-content_3UjPs_0 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    padding-right: .133333rem;
}.shop-header-detailIcon_1IXZI_0 {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: .133333rem;
    height: .333333rem;
    width: .666667rem;
    fill: #fff;
}.shop-header-shopName_2QrHh_0 {
    margin: 0;
    font-size: .466667rem;
    line-height: .466667rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.shop-header-delivery_1mcTe_0 {
    white-space: nowrap;
    height: .666667rem;
    line-height: .72rem;
}.shop-header-deliveryItem_Fari3_0 {
    line-height: .32rem;
}.shop-header-deliveryItem_Fari3_0:not(:last-child):after {
    content: " / ";
    opacity: .5;
}.shop-header-notice_2DzmG_0 {
    height: .533333rem;
    line-height: .533333rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}.shop-header-detailIcon_1IXZI_0 {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: .133333rem;
    height: .333333rem;
    width: .666667rem;
    fill: #fff;
}.shop-header-activities_3NWG9_0 {
    position: absolute;
    left: .266667rem;
    right: .346667rem;
    bottom: .133333rem;
}.activity-containerNoWrap_2zBBg_0 {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.activity-container_2EaDo_0 {
    line-height: .426667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: .266667rem;
}
.shop-header-activityRow_fbfAg_0 {
    padding-right: 1.28rem;
}
.shop-tab-container_3skq8_0 {
    line-height: 1.2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background-color: #fff;
}
.shop-header-activityCount_tCsbf_0 {
    position: absolute;
    top: 0;
    right: 0;
}
.shop-tab-tab_r4SDi_0 {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    text-align: center;
    font-size: .373333rem;
    color: #666;
    border-bottom: 1px solid #ddd;
}
.shop-tab-tab_r4SDi_0 {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    text-align: center;
    font-size: .373333rem;
    color: #666;
    border-bottom: 1px solid #ddd;
}
.shop-tab-active_ZY0C0_0 {
    color: #3190e8;
}.shop-tab-active_ZY0C0_0 .shop-tab-title_1crD1_0 {
    position: relative;
}.menuview-2hUkG *, :after, :before {
    box-sizing: inherit;
}.shop-tab-active_ZY0C0_0 .shop-tab-title_1crD1_0:after {
    content: "";
    position: absolute;
    bottom: -.16rem;
    left: -.066667rem;
    right: -.066667rem;
    height: .053333rem;
    background-color: #3190e8;
    border-radius: .04rem;
}
.menuview-2hUkG {
    height: 100%;
    box-sizing: border-box;
}.menuview-17K3g {
    height: 100%;
    padding-bottom: 1.28rem;
    background-color: #fff;
}
.menuview-2hUkG *, :after, :before {
    box-sizing: inherit;
}
.menuview-i6fQ3 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
}
.menuview-2_lFf {
    width: 2.266667rem;
    height: 100%;
}.menucategory-29kyE {
    overflow-y: auto;
    height: 100%;
    background-color: #f8f8f8;
    -webkit-overflow-scrolling: touch;
}.menuview-2hUkG h3, .menuview-2hUkG p, .menuview-2hUkG ul {
    margin: 0;
}.menuview-2hUkG ul {
    padding: 0;
}.menucategory-3e27M {
    position: relative;
    padding: .466667rem .2rem;
    border-bottom: 1px solid #ededed;
    font-size: .346667rem;
    color: #666;
}.menucategory-375ij {
    width: .24rem;
    height: .333333rem;
}.menuview-2hUkG img {
    max-width: 100%;
}.menucategory-3e27M.menucategory-JnDmc {
    background-color: #fff;
    border-right-color: #fff;
    font-weight: bolder;
}.menuview-JqDMu {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    height: 100%;
}.container[data-v-f433384a] {
    position: relative;
    height: 100%;
}.container .scroller[data-v-f433384a] {
    height: 100%;
    overflow-y: auto;
}
dl[data-v-f433384a] {
    margin: 0;
}dt[data-v-f433384a] {
    position: relative;
    padding: .2rem .266667rem;
    background-color: #f1f1f1;
}.category-title[data-v-f433384a] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    overflow: hidden;
}.category-title strong[data-v-f433384a] {
    margin-right: .133333rem;
    font-weight: 700;
    font-size: .373333rem;
    color: #666;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
}.category-title span[data-v-f433384a] {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    color: #999;
    font-size: .266667rem;
    white-space: nowrap;
    overflow: hidden;
}.category-more .icon[data-v-f433384a] {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: .933333rem;
    z-index: 2;
    background:#f1f1f1 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAAAXNSR0IArs4c6QAAAFhJREFUOBFjYBgFoyEwGgKMs2bN8gQGwyxoUKQBwXZswUKuOhaQ4f///5cBGcrIyAiySBbExgLIUseExSCqCoEsSAO6/AkIg9h4TKe2OjxWjUqNhsDwCgEACvMiGUpibN4AAAAASUVORK5CYII=) 50% no-repeat;
    background-size: .32rem auto;
}
.category-more .popup[data-v-f433384a] {
    position: absolute;
    background-color: #39373a;
    opacity: .97;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: top right;
    transform-origin: top right;
    width: 63%;
    right: .133333rem;
    z-index: 3;
    color: #eee;
    font-size: .32rem;
    border-radius: .106667rem;
    padding: .24rem .266667rem;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    cursor: pointer;
}.category-more .popup span[data-v-f433384a]:first-child {
    color: #fff;
}.category-more[data-v-f433384a]:after {
    content: "";
    position: absolute;
}dd[data-v-f433384a] {
    position: relative;
    background-color: #fff;
    margin: 0;
    padding: .4rem .266667rem;
    margin-bottom: 1px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 2.933333rem;
}dd[data-v-f433384a]:not(:last-child) {
    box-shadow: .4rem .013333rem 0 0 #ddd;
}.foodimg[data-v-f433384a] {
    margin-right: 4%;
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
    display: block;
    width: 0;
    vertical-align: top;
}.menuview-2hUkG img {
    max-width: 100%;
}
.foodimg img[data-v-f433384a] {
    width: 100%;
    border-radius: .053333rem;
}
.foodinfo[data-v-f433384a] {
    position: relative;
    -webkit-box-flex: 8;
    -ms-flex: 8;
    flex: 8;
    display: block;
    width: 0;
    padding-bottom: .666667rem;
}
.foodtitle[data-v-f433384a] {
    font-size: .4rem;
    font-weight: 700;
    line-height: 1.1;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.fooddescription[data-v-f433384a] {
    margin: .133333rem 0;
    font-size: .253333rem;
    color: #999;
}
.foodtitle span[data-v-f433384a] {
    vertical-align: middle;
}.foodsales[data-v-f433384a] {
    margin: .173333rem 0;
    color: #666;
    font-size: .293333rem;
    line-height: 1;
}
.foodsales>span[data-v-f433384a]:not(:first-child) {
    margin-left: .106667rem;
    vertical-align: middle;
}.foodprice[data-v-f433384a] {
    position: absolute;
    left: 0;
    bottom: 0;
    font-weight: 700;
    font-size: .426667rem;
    line-height: .426667rem;
    color: #f60;
}.foodprice[data-v-f433384a]:before {
    font-weight: 400;
    content: "\A5";
    font-size: .293333rem;
    display: inline-block;
}.cartbutton[data-v-f433384a] {
    position: absolute;
    right: 0;
    bottom: -.066667rem;
}.cartbutton-2tycR {
    display: inline-block;
    font-size: .346667rem;
    white-space: nowrap;
}.cartbutton-2tycR a {
    display: inline-block;
    padding: .093333rem;
    vertical-align: middle;
    text-decoration: none;
}.cartbutton-2tycR svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    fill: #3190e8;
}
[data-dpr="3"] .cartbutton-2tycR svg {
    width: 60px;
    height: 60px;
}
.cartview-216zx {
    font-size: .426667rem;
}
.cartview-bIr0V {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.6);
	transition: opacity 200ms ease;
}.cartview-JFaw9 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    bottom: 1.813333rem;
}.discount-tip-1sl_7_0 {
    background-color: #fffad6;
    border-top: 1px solid #f9e8a3;
    opacity: .96;
    line-height: .533333rem;
    font-size: .266667rem;
    text-align: center;
}.cartview-37dYf {
    padding: 0 .333333rem;
    border-bottom: 1px solid #ddd;
    background-color: #eceff1;
    color: #666;
    line-height: 1.066667rem;
}.cartview-2IL0z {
    padding-left: .133333rem;
    border-left: .093333rem solid #3190e8;
}.cartview-3ElqP {
    float: right;
    padding-left: .4rem;
    background-size: .266667rem;
    color: #666;
    text-decoration: none;
    font-size: .346667rem;
}.cartview-3ElqP svg {
    width: .306667rem;
    height: .346667rem;
    fill: #ddd;
}.entityList-yrs9v_0 {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 8rem;
}.entityList-1eODF_0 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: .2rem .333333rem .2rem 0;
    min-height: 1.466667rem;
    margin-left: .333333rem;
}.entityList-30u-R_0 {
    -webkit-box-flex: 5.5;
    -ms-flex: 5.5;
    flex: 5.5;
    line-height: normal;
}.entityList-30u-R_0 .entityList-2g5ra_0 {
    display: inline-block;
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    max-width: 4.666667rem;
}.entityList-1IZul_0 {
    white-space: nowrap;
    line-height: .333333rem;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #999;
    font-size: .266667rem;
}.menuview-2hUkG h3, .menuview-2hUkG p, .menuview-2hUkG ul {
    margin: 0;
}.entityList-1vr8H_0 {
    -webkit-box-flex: 2.5;
    -ms-flex: 2.5;
    flex: 2.5;
    color: #f60;
    text-align: right;
    white-space: nowrap;
    font-weight: 700;
}.entityList-1XZvm_0:before {
    content: "\A5";
    font-size: .266667rem;
    color: currentColor;
}.entityList-3cAE9_0 {
    -webkit-box-flex: 3;
    -ms-flex: 3;
    flex: 3;
    display: block;
    width: 0;
    text-align: right;
}.cartbutton-2tycR {
    display: inline-block;
    font-size: .346667rem;
    white-space: nowrap;
}.cartbutton-2tycR a {
    display: inline-block;
    padding: .093333rem;
    vertical-align: middle;
    text-decoration: none;
}.entityList-1eODF_0.entityList-2NcdP_0 {
    border-top: 1px solid #eee;
}.bottomNav-3XM6c_0 {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 2.106667rem;
    background-color: #3d3d3f;
    height: 1.28rem;
    opacity: .95;
}.bottomNav-18KRG_0 {
    position: absolute;
    left: .32rem;
    bottom: .2rem;
    width: 1.333333rem;
    height: 1.333333rem;
    box-sizing: border-box;
    border-radius: 100%;
    background-color: #3190e8;
    border: .133333rem solid #444;
    box-shadow: 0 -.08rem .053333rem 0 rgba(0,0,0,.1);
    will-change: transform;
}.bottomNav-3Ak_E_0 {
    font-size: .48rem;
    line-height: normal;
    color: #fff;
}.bottomNav-3zqFz_0 {
    color: #f5f5f5;
    font-size: .266667rem;
}.bottomNav-1urxC_0 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2.8rem;
    background-color: #4cd964;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: .4rem;
    font-weight: 700;
    line-height: 1.28rem;
}.bottomNav-18KRG_0:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG9wYWNpdHk9Ii4xIiBtYXNrPSJ1cmwoI2MpIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNOS4zNzQgMTguNzIyUzcuODY4IDExLjI4MyA3LjMyMyA4LjcxQzYuNzc4IDYuMTM2IDUuODYgNS4zMyAzLjk3OCA0LjUyIDIuMDk2IDMuNzEzLjM2NyAyLjI4Ni4zNjcgMi4yODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) 50% no-repeat;
    background-size: .6rem;
    content: "";
}.bottomNav-18KRG_0:after {
    position: absolute;
    right: -.12rem;
    top: -.133333rem;
    line-height: 1;
    background-color: #ff461d;
    color: #fff;
    border-radius: .32rem;
    padding: .053333rem .133333rem;
    content: attr(attr-quantity);
    font-size: .266667rem;
}.cartbutton-2OSi7, .cartbutton-3IXVK {
    display: inline-block;
    vertical-align: middle;
}
.cartbutton-2OSi7 {
    text-align: center;
    color: #666;
    font-size: .373333rem;
    min-width: .4rem;
    max-width: 2em;
    overflow: hidden;
}
.cartview-2CbR7 {
    bottom: 1.28rem;
}
.menucategory-28BIn {
    position: absolute;
    right: .08rem;
    top: .08rem;
    color: #fff;
    background-color: #ff461d;
    border-radius: .2rem;
    font-size: .266667rem;
    font-weight: 700;
    text-align: center;
    min-width: .373333rem;
    padding: 0 .106667rem;
    line-height: .373333rem;
}
.overview-container_3D2TN_0 {
    background-color: #fff;
    margin-bottom: .266667rem;
    padding: .4rem;
    font-size: .36rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #666;
}.overview-col1_28mQz_0 {
    padding-right: .4rem;
    border-right: 1px solid #ddd;
    text-align: center;
    line-height: 1.5;
}.overview-overallScore_1gbf5_0 {
    font-size: .8rem;
    line-height: 1;
    font-weight: 400;
    color: #f60;
    display: block;
}.overview-small_3zU_U_0 {
    font-size: .266667rem;
    color: #999;
}.overview-col2_1_8Bk_0 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    font-size: .373333rem;
    line-height: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}.overview-line_36TKo_0 {
    width: 80%;
    margin: .133333rem 0;
}.overview-lineContent_3LAEC_0 {
    padding-left: .266667rem;
}.rating-wrapper_36aX1_0 {
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}.overview-lineScore_FKvKk_0 {
    color: #f60;
    padding-left: .266667rem;
}.rating-max_1MKzt_0, .rating-rating_1ZAfX_0 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}.rating-max_1MKzt_0 svg {
    fill: #ddd;
}
.rating-max_1MKzt_0 svg, .rating-rating_1ZAfX_0 svg {
    display: block;
    margin: 0 1px;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    width: .266667rem;
    height: .266667rem;
}
.rating-rating_1ZAfX_0 svg {
    fill: #ffaa0c;
}
.rating-rating_1ZAfX_0 {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}.index-rateDetail_3mb4t_0 {
    background-color: #fff;
    padding: .4rem .32rem;
    font-size: .36rem;
}.index-tagBlock_1B49c_0 {
    padding-bottom: .4rem;
    border-bottom: 1px solid #ddd;
}
.rating-tags-item_2MAXu_0 {
    display: inline-block;
    padding: .2rem;
    margin: .066667rem .133333rem;
    border-radius: .133333rem;
    color: #6d7885;
    background-color: #ebf5ff;
}
.rating-tags-active_1Q92x_0 {
    color: #fff;
    background-color: #3190e8;
}
.index-comment_3xWea_0 {
    padding: .4rem 0;
    border-bottom: 1px solid #ddd;
}.comment-block-container_2KCP2_0 {
    position: relative;
    padding-left: 1.2rem;
}.comment-block-time_uW1Rk_0 {
    position: absolute;
    top: .133333rem;
    right: 0;
    font-size: .32rem;
    color: #999;
}.comment-block-avatar_jhxbX_0 {
    position: absolute;
    top: 0;
    left: 0;
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
}.comment-block-content_3gX7e_0 {
    font-size: .346667rem;
}.comment-block-username_2KPtB_0 {
    font-size: .346667rem;
    margin-top: 0;
    margin-bottom: .133333rem;
    color: #666;
}.rating-wrapper_36aX1_0 {
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}.rating-max_1MKzt_0, .rating-rating_1ZAfX_0 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}.rating-max_1MKzt_0 svg {
    fill: #ddd;
}
.rating-max_1MKzt_0 svg, .rating-rating_1ZAfX_0 svg {
    display: block;
    margin: 0 1px;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    width: .266667rem;
    height: .266667rem;
}
.rating-rating_1ZAfX_0 {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}
.rating-max_1MKzt_0, .rating-rating_1ZAfX_0 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.rating-max_1MKzt_0 svg, .rating-rating_1ZAfX_0 svg {
    display: block;
    margin: 0 1px;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    width: .266667rem;
    height: .266667rem;
}.rating-rating_1ZAfX_0 svg {
    fill: #ffaa0c;
}.comment-block-rating_2xaJx_0 {
    font-size: .333333rem;
    color: #999;
    vertical-align: middle;
}.comment-block-text_1GGd4_0 {
    color: #333;
    font-size: .373333rem;
    margin: .213333rem 0;
}.comment-block-photos_2MUUP_0 li {
    display: inline-block;
    margin: .133333rem;
}.comment-block-photos_2MUUP_0 img {
    width: 1.893333rem;
    height: 1.893333rem;
}.comment-block-foods_3a4co_0 li {
    display: inline-block;
    font-size: .293333rem;
    color: #999;
    border: 1px solid #ddd;
    padding: .106667rem .266667rem;
    margin: .093333rem;
    border-radius: .08rem;
    max-width: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.index-container_GB9-L_0 {
    background-color: #eee;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.menucategory-3e27M.menucategory-JnDmc:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: .08rem;
    background-color: #3190e8;
}
/*店铺详情*/
.bulletin-modal-container_3dL1X_0 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: .8rem solid transparent;
    border-top-width: 1.066667rem;
    border-bottom-width: 2.4rem;
    overflow: auto;
    background-color: #262626;
    color: #fff;
    -webkit-backdrop-filter: saturate(500%) blur(.666667rem);
    backdrop-filter: saturate(500%) blur(.666667rem);
}
.bulletin-modal-container_3dL1X_0 h2 {
    text-align: center;
    font-size: 1.5em;
}.bulletin-modal-container_3dL1X_0 h2 {
    text-align: center;
    font-size: 1.5em;
}.bulletin-modal-rating_mAg8E_0 {
    display: inline-block;
    -webkit-transform: scale(2);
    transform: scale(2);
}.rating-wrapper_36aX1_0 {
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}.rating-max_1MKzt_0, .rating-rating_1ZAfX_0 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}.rating-max_1MKzt_0 svg, .rating-rating_1ZAfX_0 svg {
    display: block;
    margin: 0 1px;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    width: .266667rem;
    height: .266667rem;
}.rating-max_1MKzt_0 svg {
    fill: #ddd;
}.rating-rating_1ZAfX_0 {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}.bulletin-modal-subtitle_17A0B_0 {
    text-align: center;
    margin: .8rem 0 .533333rem;
    background-image: -webkit-linear-gradient(left,#555);
    background-image: linear-gradient(90deg,#555);
    background-position: 50%;
    background-size: 100% 1px;
    background-repeat: no-repeat;
}.bulletin-modal-subtitle_17A0B_0 span {
    font-size: .32rem;
    padding: .133333rem .266667rem;
    border-radius: .666667rem;
    border: 1px solid #555;
    background-color: #262626;
}.activity-container_2EaDo_0 {
    line-height: .426667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: .266667rem;
}.activity-activityIcon_1iJyG_0 {
    margin-right: .133333rem;
    font-size: .266667rem;
    font-style: normal;
    line-height: 1;
    height: .293333rem;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid;
    border-radius: .04rem;
}.activity-containerWrap_12dyC_0 .activity-activityIcon_1iJyG_0 {
    margin-top: .066667rem;
}.activity-description_2q8qg_0 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
}.bulletin-modal-subtitle_17A0B_0 {
    text-align: center;
    margin: .8rem 0 .533333rem;
    background-image: -webkit-linear-gradient(left,#555);
    background-image: linear-gradient(90deg,#555);
    background-position: 50%;
    background-size: 100% 1px;
    background-repeat: no-repeat;
}.bulletin-modal-subtitle_17A0B_0 span {
    font-size: .32rem;
    padding: .133333rem .266667rem;
    border-radius: .666667rem;
    border: 1px solid #555;
    background-color: #262626;
}.bulletin-modal-close_u5_7x_0 {
    position: fixed;
    left: 0;
    right: 0;
    bottom: .666667rem;
    margin: auto;
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid #888;
    border-radius: 50%;
}.bulletin-modal-close_u5_7x_0 svg {
    fill: #fff;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(.3);
    transform: scale(.3);
}
.modal-container_1qSDG_0 {
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    z-index: 100;
    background-color: #fff;
}
.bottomNav-1urxC_0.bottomNav-9FCIh_0 {
    background-color: #535356;
}
</style>