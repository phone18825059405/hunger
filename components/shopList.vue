<template>
    <div>
        <div class="searchHeader" style="left: 0px; right: 0px; top: 0px; z-index: 10;" v-if="searchBar">
            <svg onclick="history.back()" class="arrowLeft"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use></svg>
            <input type="search" placeholder="请输入商品名称" class="headerInput" :value="searchWord" @search="searchShop">
        </div>
        <aside data-v-98a11d7e="" class="filter" data-v-3d8ac645="" v-if="!opeartion.disable">
            <div data-v-98a11d7e="" class="filter-header">
                <a data-v-98a11d7e="" href="javascript:" @click="changeTab" data-index="0" :class="['filter-nav',opeartion.tabIndex==0?'active':'']"><span data-v-98a11d7e="">{{opeartion.classify_name}}</span><svg data-v-98a11d7e="" viewbox="0 0 72 32"><path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path></svg></a>

                <a data-v-98a11d7e="" href="javascript:" @click="changeTab" data-index="1" :class="['filter-nav',opeartion.tabIndex==1?'active':'']"><span data-v-98a11d7e="">{{opeartion.sort_name}}</span><svg data-v-98a11d7e="" viewbox="0 0 72 32"><path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path></svg></a>

                <a data-v-98a11d7e="" href="javascript:" @click="changeTab" data-index="2" :class="['filter-nav',opeartion.tabIndex==2?'active':'','filter-nav-more']"><span data-v-98a11d7e="">筛选</span><svg data-v-98a11d7e="" viewbox="0 0 72 32"><path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path></svg></a>
            </div>
            <section data-v-98a11d7e="" v-if="opeartion.tabIndex==0" class="filter-extend filter-category open" >
                <div class="filter-scroller">
                    <ul>
                        <li v-for="(item,index) in opeartion.classify" @click="changeClassify" :class="[index==opeartion.classify_sub_aIndex?'active':'']" :data-index="index"><span>{{item.name}}</span><span class="count">{{item.count}}</span></li>
                    </ul>
                    <ul>
                        <li class="" v-for="(sub, index) in opeartion.classify_sub" :data-index="index" :class="[opeartion.classify_sub_sub_aIndex==index?'active':'']" @click="changeShopList">
                            <img :src="sub.image_url | categoryImg">
                            <span>{{sub.name}}</span>
                            <span class="count">{{sub.count}}</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section data-v-fd238482="" v-if="opeartion.tabIndex==1" class="filter-extend filter-sort open" data-v-98a11d7e="">
                <ul data-v-fd238482="">
                    <li data-v-fd238482="" :data-index="0" @click.stop="changeSort($event)" data-name="智能排序" lass=""><svg data-v-fd238482=""><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default"></use></svg><span data-v-fd238482="">智能排序</span><svg data-v-fd238482="" class="selected"><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg></li>
                    <li data-v-fd238482="" :data-index="5" @click.stop="changeSort($event)" data-name="距离最近" class=""><svg data-v-fd238482=""><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#distance"></use></svg><span data-v-fd238482="">距离最近</span><svg data-v-fd238482="" class="selected"><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg></li>
                    <li data-v-fd238482="" :data-index="6" @click.stop="changeSort($event)" data-name="销量最高" class=""><svg data-v-fd238482=""><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#hot"></use></svg><span data-v-fd238482="">销量最高</span><svg data-v-fd238482="" class="selected"><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg></li>
                    <li data-v-fd238482="" :data-index="1" @click.stop="changeSort($event)" data-name="起送价最低" class=""><svg data-v-fd238482=""><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#price"></use></svg><span data-v-fd238482="">起送价最低</span><svg data-v-fd238482="" class="selected"><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg></li>
                    <li data-v-fd238482="" :data-index="2" @click.stop="changeSort($event)" data-name="配送速度最快" class=""><svg data-v-fd238482=""><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#speed"></use></svg><span data-v-fd238482="">配送速度最快</span><svg data-v-fd238482="" class="selected"><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg></li>
                    <li data-v-fd238482="" :data-index="3" @click.stop="changeSort($event)" data-name="评分最高" class=""><svg data-v-fd238482=""><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating"></use></svg><span data-v-fd238482="">评分最高</span><svg data-v-fd238482="" class="selected"><use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg></li>
                </ul>
            </section>
            <section data-v-d7cbbe24="" v-if="opeartion.tabIndex==2" class="filter-extend filter-more open" data-v-98a11d7e=""><!---->
                <div data-v-d7cbbe24="" class="filter-scroller">
                    <dl data-v-d7cbbe24="">
                        <dt data-v-d7cbbe24="">配送方式</dt>
                        <dd v-for="(delivery_mode,index) in opeartion.filter.delivery_way" data-v-d7cbbe24="" :class="[opeartion.urlProps['delivery_mode[]'].includes(delivery_mode.id)?'selected':'']" :data-id="delivery_mode.id" @click="addFilter('delivery_mode[]',$event)">
                            <svg data-v-d7cbbe24="" class="fengniao"><use data-v-d7cbbe24="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fengniao"></use></svg>
                            <svg data-v-d7cbbe24="" class="selected-icon">
                                <use data-v-d7cbbe24="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                            <span data-v-d7cbbe24="" >{{delivery_mode.text}}</span>
                        </dd>
                    </dl>
                    <dl data-v-d7cbbe24="">
                        <dt data-v-d7cbbe24="">商家属性 (可多选)</dt>
                        <dd v-for="prop in opeartion.filter.props" data-v-d7cbbe24="" :class="[opeartion.urlProps['support_ids[]'].includes(prop.id)?'selected':'']" :data-id="prop.id" @click="addFilter('support_ids[]',$event)">
                            <svg data-v-d7cbbe24="" class="selected-icon"><use data-v-d7cbbe24="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                            <i data-v-d7cbbe24="" :style="{color: '#'+prop.icon_color}">{{prop.icon_name}}</i><!----><span data-v-d7cbbe24="">{{prop.name}}</span>
                        </dd>
                    </dl>
                </div>
                <div data-v-d7cbbe24="" class="filter-btn">
                    <a data-v-d7cbbe24="" href="javascript:">清空</a>
                    <a data-v-d7cbbe24="" href="javascript:" @click="changeFilter">确定({{opeartion.urlProps['support_ids[]'].length+opeartion.urlProps['delivery_mode[]'].length}})</a>
                </div>
            </section>
            <section data-v-98a11d7e="" :class="['filter-modal',opeartion.tabIndex?'open':'']"></section>
        </aside>
    	<div class="shoplist">
    		<a v-for="item in shopLists" :href="'shop.html?id='+item.id" class="index-container_2XMzI shop-0">
    			<div class="logo-container_1XLJl_0">
    				<div class="logo-main_1kulr_0">
    					<img :alt="item.name" class="logo-logo_2XR1m_0" :src="item.image_path | img_weather"><!---->
    				</div>
    				<!---->
    			</div>
    			<div class="index-main_2HHPe">
    				<section class="index-line_1Zyr1">
    				<h3 :class="['index-shopname_3_J4F' ,item.is_premium?'index-premium_eGB7C':'']"><span>{{item.name}}</span></h3>
    				<div class="index-supportWrap_VWrQG" v-if="item.supports.length">
    					<div v-for="support in item.supports" class="activity-container_2EaDo_0 activity-containerNoWrap_2zBBg_0">
    						<i class="activity-activityIcon_1iJyG_0 activity-icononly_3QM3P_0" style="color: rgb(153, 153, 153); border-color: rgb(221, 221, 221);">{{support.icon_name}}</i><!---->
    					</div>
    				</div>
    				</section><section class="index-line_1Zyr1">
    				<div class="index-rateWrap_3sCb3">
    					<div class="rating-wrapper_36aX1_0">
    						<div class="rating-max_1MKzt_0">
    							<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
    						</div>
    						<div class="rating-rating_1ZAfX_0" :style="{width:item.rating*20+'%'}">
    							<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
    						</div>
    					</div>
    					<span class="index-rate_2O_yP">{{item.rating}}</span><span>月售{{item.recent_order_num}}单</span>
    				</div>
    				<div class="index-deliveryWrap_1Q_ky" v-if="item.delivery_mode">
    					<span class="index-iconDelivery_267-X">准时达</span><span class="index-iconDelivery_267-X index-hollow_lqvFq"><span>{{item.delivery_mode.text}}</span></span>
    				</div>
    				</section><section class="index-line_1Zyr1">
    				<div class="index-moneylimit_1xDf3">
    					<span>¥{{item.piecewise_agent_fee.rules[0].price}}起送</span><span>{{item.piecewise_agent_fee.description}}</span><span>{{item.average_cost}}</span>
    				</div>
    				<div class="index-timedistanceWrap_2RmAM">
    					<span class="index-distanceWrap_HYwgP">{{item.distance}}m</span><span class="index-timeWrap_1pa5y">{{item.order_lead_time}}分钟</span>
    				</div>
    				</section><!---->
    			</div>
    		</a>
    		<div class="BackTop-wrapper_3XDbcaq" @click="toTop" v-show="scrollTop_value>2000"><svg class="BackTop-icon_2Js4K94"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back-top.7a234e5"></use></svg></div>
    	</div>
    </div>
</template>
<script>
	export default{
		data(){
			return{
				isloading:false,
				shopLists:[],
				currentPage:0,
				scrollTop_value:0,
                opeartion:{
                    classify:[],
                    classify_name:'分类',
                    classify_sub:[],
                    classify_sub_aIndex:1,
                    classify_sub_sub_aIndex:null,
                    sort_name:'排序',
                    filter:{
                        delivery_way:[],
                        props:[],
                        isLoaded:false,
                    },
                    sortIndex:'',
                    tabIndex:null,
                    disable:null,
                    urlProps:{
                        'restaurant_category_ids[]':[],
                        'order_by':[],
                        'support_ids[]':[],
                        'delivery_mode[]':[]
                    }
                },
                url:null,
                searchBar:null,
                searchWord:null
			}
		},
		props:{
			rurl:String,
            dis_op:Boolean,
            isSearch:Boolean,
		},
		filters:{
			img_weather(value){
				return 'https://fuss10.elemecdn.com/' + value.slice(0,1) + '/' + value.slice(1,3) + '/' + value.slice(3) + '.'+value.match(/jpeg|png/)[0]+'?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/';
			},
            categoryImg:function(value){
                return 'https://fuss10.elemecdn.com/' + value.slice(0,1) + '/' + value.slice(1,3) + '/' + value.slice(3) + '.'+value.match(/jpeg|png/)[0]+'?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/';
            }
		},

		methods:{
			loadShopList(){
                var that = this;
				this.isloading = true;
				const start = new Date()*1;
                console.log('加载中......')
                console.log(this.url.replace(/offset=([0-9]+)/,'offset='+this.currentPage))
				this.$http.get(this.url.replace(/offset=([0-9]+)/,'offset='+this.currentPage)).then(function(response){


                    if(/array/i.test(Object.prototype.toString.call(response.body))){                                               
                        this.shopLists = this.shopLists.concat(response.body)
                    }else{
                        console.log(response)
                        response.body[0].restaurant_with_foods.forEach(function(item){
                            that.shopLists.push(item.restaurant)
                        })
                    }
					
					this.isloading = false;
					this.currentPage ++;
					const end = new Date()*1;
                    console.log('加载完成！耗时:'+(end-start)/1000+'秒')
                    this.opeartion.tabIndex = null;

				},function(error){
					this.isloading = false;
					console.log('加载失败')
				})
			},
            clearShopList(){
                var that = this;
                this.shopLists = [];
                this.currentPage = 0;
                this.url = 'https://mainsite-restapi.ele.me/shopping/restaurants?latitude=31.23037&longitude=121.473701&keyword=&offset=0&limit=20&extras[]=activities';

                for(var prop in this.opeartion.urlProps){
                    if(!this.opeartion.urlProps[prop]) continue;
                    this.opeartion.urlProps[prop].forEach(function(item){
                        that.url += '&'+ prop + '=' + item;
                    })
                }
            },
            changeShopList(event){
                this.opeartion.classify_name = this.opeartion.classify_sub[event.currentTarget.getAttribute('data-index')]['name'];
                this.opeartion.urlProps['restaurant_category_ids[]'] = [this.opeartion.classify_sub[event.currentTarget.getAttribute('data-index')]['id']];
                this.opeartion.classify_sub_sub_aIndex = event.currentTarget.getAttribute('data-index');
                console.log(event.currentTarget.getAttribute('data-index'))

                this.clearShopList();
                this.loadShopList();
            },
            changeSort(event){

                this.opeartion.urlProps.order_by = [event.currentTarget.getAttribute('data-index')];
                this.opeartion.sort_name = event.currentTarget.getAttribute('data-name')

                this.clearShopList();
                this.loadShopList();
            },
            changeFilter(target,event){

                this.clearShopList();
                this.loadShopList();
            },
            addFilter(target,event){
                var that = this;
                var id = event.currentTarget.getAttribute('data-id')*1;
                if(!this.opeartion.urlProps[target].length){
                    this.opeartion.urlProps[target].push(id);
                }else{
                    if(!this.opeartion.urlProps[target].includes(id)){
                        that.opeartion.urlProps[target].push(id);
                    }else{
                        this.opeartion.urlProps[target].forEach(function(item,index){
                            if(item == id){
                                that.opeartion.urlProps[target].splice(index,1);
                            }
                        })
                    }
                    
                }
                console.log(this.opeartion.urlProps[target])
            },
            loadClassify(event){
                if(this.opeartion.classify.length || this.opeartion.disable) return;
                this.$http.get('https://mainsite-restapi.ele.me/shopping/v2/restaurant/category?latitude=31.23037&longitude=121.473701').then(function(response){

                    this.opeartion.classify = response.body;
                    this.isloading = false;

                },function(error){
                    this.isloading = false;
                    console.log('加载分类失败')
                })
            },
            loadFilter(){
                if(this.opeartion.filter.isLoaded) return;      
                this.$http.get('https://mainsite-restapi.ele.me/shopping/v1/restaurants/delivery_modes?latitude=31.23037&longitude=121.473701&kw=').then(function(response){

                    this.opeartion.filter.delivery_way = response.body;
                    this.isloading = false;

                },function(error){
                    this.isloading = false;
                    this.filter.isLoaded = false;
                    console.log('加载过滤失败')
                })

                this.$http.get('https://mainsite-restapi.ele.me/shopping/v1/restaurants/activity_attributes?latitude=31.23037&longitude=121.473701&kw=').then(function(response){

                    this.opeartion.filter.props = response.body;
                    this.isloading = false;

                },function(error){
                    this.isloading = false;
                    this.filter.isLoaded = false;
                    console.log('加载过滤失败')
                })

                this.opeartion.filter.isLoaded = true;
            },
            searchShop(event){
                this.shopLists = [];
                this.currentPage = 0;
                this.url = 'https://mainsite-restapi.ele.me/shopping/v1/restaurants/search?latitude=31.23037&longitude=121.473701&keyword='+encodeURIComponent(event.target.value)+'&offset=0&search_item_type=2&limit=20&extras[]=activities';
                this.loadShopList();
            },
            changeTab(event){
                var index = event.currentTarget.getAttribute('data-index');
                if(this.opeartion.tabIndex == index){
                    this.opeartion.tabIndex = null;
                    return;
                }
                this.opeartion.tabIndex = index;
                if(index == 0){
                    this.opeartion.classify_sub = this.opeartion.classify[this.opeartion.classify_sub_aIndex].sub_categories;
                }else if(index == 2){
                    this.loadFilter();
                }
            },
            changeClassify(event){               
                var index = event.currentTarget.getAttribute('data-index');
                this.opeartion.classify_sub_aIndex = index;
                this.opeartion.classify_sub = this.opeartion.classify[index].sub_categories;

                if(index == 0){
                    this.opeartion.classify_name = this.opeartion.classify[0]['name'];
                    this.url = 'https://mainsite-restapi.ele.me/shopping/restaurants?latitude=31.23037&longitude=121.473701&keyword=&offset=0&limit=20&extras[]=activities&restaurant_category_ids[]=undefined';
                    this.loadShopList();
                    this.opeartion.classify_sub_aIndex = 1;
                }
            },
			scrollLoad(){//滚动加载
                if(document.body.scrollTop + 50 > document.body.scrollHeight - window.innerHeight){
                    if(this.isloading) return;
                    this.loadShopList();                 
                }
            },
            toTop(){
            	document.body.scrollTop = 0;
            },
		},
		created(){
            this.opeartion.disable = this.$props.dis_op;
            if(this.url && this.$props.rurl){
                this.url = this.$props.rurl + window.location.search;
            }else{
                 this.url = 'https://mainsite-restapi.ele.me/shopping/restaurants?latitude=31.23037&longitude=121.473701&offset=20&limit=20&extras[]=activities&terminal=h5'
            }
         
            if(this.$props.isSearch){
                this.searchBar = this.$props.isSearch;
                if(this.$props.isSearch == true){
                    this.searchWord = decodeURIComponent(window.location.search.match(/keyword=([^&]+)/)[1]);
                    this.url = 'https://mainsite-restapi.ele.me/shopping/v1/restaurants/search?latitude=31.23037&longitude=121.473701&keyword='+ decodeURIComponent(window.location.search.match(/keyword=([^&]+)/)[1]) +'&offset=0&search_item_type=2&limit=20&extras[]=activities';
                } 
            }


			this.loadShopList();
            this.loadClassify();
		},
		mounted(){
			var that = this;
			window.addEventListener('scroll',function(){
				that.scrollTop_value = document.body.scrollTop;
				that.scrollLoad();
			},false)
		},
	}
</script>
<style lang="sass">
a{
    text-decoration: none;
}
.searchHeader {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: #0097fa;
    border-bottom: 1px solid #eee;
    padding: .293333rem;
}
.arrowLeft {
    width: .906667rem;
    fill: #fff;
    padding: .133333rem;
    font-size: .373333rem;
    font-weight: lighter;
    height: .8rem;
    margin-top: .066667rem;
}
.headerInput {
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
}
.index-container_2XMzI, .index-main_2HHPe {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.index-container_2XMzI {
    position: relative;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    color: #666;
    list-style: none;
    font-size: .293333rem;
}
.logo-container_1XLJl_0 {
    position: relative;
    padding: .4rem .266667rem;
}.logo-main_1kulr_0 {
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
}.logo-logo_2XR1m_0 {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: .053333rem;
}.index-main_2HHPe {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: .4rem .266667rem .4rem 0;
}
.index-line_1Zyr1 {
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
}.index-shopname_3_J4F {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: 5rem;
    height: .426667rem;
    color: #333;
    font-weight: 700;
    font-size: .4rem;
}.index-shopname_3_J4F.index-premium_eGB7C:before {
    margin-right: .133333rem;
    padding: 0 .066667rem;
    height: .4rem;
    border-radius: .053333rem;
    background-color: #ffd930;
    color: #52250a;
    content: "\54C1\724C";
    vertical-align: top;
    text-align: center;
    white-space: nowrap;
    font-weight: 700;
    font-size: .293333rem;
    line-height: .4rem;
}
.index-shopname_3_J4F span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}.index-supportWrap_VWrQG {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.index-activities_6HU-0, .index-supportWrap_VWrQG {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
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
.activity-activityIcon_1iJyG_0.activity-icononly_3QM3P_0 {
    margin-right: 0;
}
.activity-containerNoWrap_2zBBg_0 .activity-icononly_3QM3P_0 {
    margin-left: .066667rem;
}
.activity-activityIcon_1iJyG_0 {
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
}
.index-line_1Zyr1:nth-child(2) {
    margin-top: .2rem;
}.index-rateWrap_3sCb3 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}.rating-wrapper_36aX1_0 {
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}.index-rate_2O_yP {
    margin: 0 .106667rem;
    color: #ff6000;
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
.rating-rating_1ZAfX_0 svg {
    fill: #ffaa0c;
}.index-deliveryWrap_1Q_ky {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.index-iconDelivery_267-X:not(:last-child) {
    margin-right: .08rem;
}
.index-iconDelivery_267-X {
    padding: 0 .053333rem;
    border: 1px solid #44a5ff;
    border-radius: .053333rem;
    background-color: #fff;
    color: #2395ff;
    font-size: .266667rem;
    line-height: .346667rem;
}.index-iconDelivery_267-X.index-hollow_lqvFq {
    background-color: #2395ff;
    color: #fff;
}.index-line_1Zyr1:nth-child(3) {
    margin-top: .226667rem;
    line-height: .32rem;
}
.index-moneylimit_1xDf3 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
}.index-moneylimit_1xDf3 span:nth-of-type(2) {
    overflow: hidden;
    max-width: 2.666667rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}.index-moneylimit_1xDf3 span+span:before {
    margin: 0 .08rem;
    color: #ddd;
    content: "/";
}.index-timedistanceWrap_2RmAM {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}.index-distanceWrap_HYwgP {
    color: #999;
}.index-timeWrap_1pa5y {
    color: #2395ff;
}.index-timedistanceWrap_2RmAM span+span:before {
    margin: 0 .08rem;
    color: #ddd;
    content: "/";
}

.BackTop-wrapper_3XDbcaq {
    position: fixed;
    right: .4rem;
    bottom: 2rem;
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
    width: 1.133333rem;
    height: 1.133333rem;
    border: .013333rem solid #999;
    border-radius: 50%;
    background: #fff;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}.BackTop-icon_2Js4K94 {
    display: block;
    width: .533333rem;
    height: .533333rem;
    fill: #999;
}
.filter[data-v-98a11d7e] {
    position: relative;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    height: 1.066667rem;
    line-height: 1.04rem;
    z-index: 100;
}.filter-header[data-v-98a11d7e] {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 3;
    background-color: #fff;
}.filter-nav[data-v-98a11d7e] {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    text-align: center;
    color: #666;
    position: relative;
    font-size: .346667rem;
}.filter-category {
    z-index: 200;
    padding-bottom: 0;
    color: #666;
}.filter-extend[data-v-98a11d7e] {
    left: 0;
    right: 0;
    top: 100%;
    border-top: 1px solid #ddd;
    position: absolute;
    max-height: 0;
    background-color: #fff;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    visibility: hidden;
    overflow: auto;
    opacity: 0;
    z-index: 3;
}.filter-category[data-v-98a11d7e] {
    height: 1000%;
}.filter-extend.open[data-v-98a11d7e] {
    opacity: 1;
    visibility: visible;
    max-height: 1000%;
}.filter-category .filter-scroller, .filter-category .loading {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
}.filter-category ul {
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    display: block;
    width: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}.filter-category ul:first-child {
    background-color: #fafafa;
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
    display: block;
    width: 0;
}.filter-category li {
    position: relative;
    line-height: 1.2rem;
}.filter-category li.active {
    background-color: #fff;
}.filter-category ul:first-child li {
    padding: 0 .133333rem 0 .266667rem;
}.filter-category .count {
    position: absolute;
    right: .266667rem;
    line-height: .373333rem;
    top: 50%;
    margin-top: -.186667rem;
    border-radius: .266667rem;
    border: .013333rem solid #eee;
    background-color: #fff;
    padding: 0 .133333rem;
    font-size: .293333rem;
}.filter-sort[data-v-fd238482] {
    padding-bottom: 0;
}
.filter-sort li[data-v-fd238482] {
    position: relative;
    padding-left: .4rem;
    line-height: 1.333333rem;
}.filter-sort svg[data-v-fd238482] {
    width: .4rem;
    height: .4rem;
    margin-right: .266667rem;
    vertical-align: middle;
}.filter-sort svg[data-v-fd238482] {
    width: .4rem;
    height: .4rem;
    margin-right: .266667rem;
    vertical-align: middle;
}.filter-sort .selected[data-v-fd238482] {
    position: absolute;
    right: 0;
    top: 50%;
    display: none;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}.filter-sort li[data-v-fd238482]:not(:last-child):after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 1.066667rem;
    right: 0;
    height: 1px;
    background-color: #ddd;
}.filter-extend.filter-more[data-v-98a11d7e] {
    padding-bottom: 1.466667rem;
}.filter-scroller[data-v-d7cbbe24] {
    overflow: auto;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    line-height: normal;
}.filter-scroller dl[data-v-d7cbbe24] {
    margin: .266667rem 0;
    padding: 0 .4rem;
    overflow: hidden;
}.filter-scroller dt[data-v-d7cbbe24] {
    margin-bottom: .2rem;
    color: #666;
}.filter-scroller dd[data-v-d7cbbe24] {
    margin: 0;
    float: left;
    width: 32%;
    margin-right: 2%;
    border: 1px solid #ddd;
    padding: .173333rem 0;
    height: .933333rem;
    margin-bottom: .2rem;
    border-radius: .066667rem;
    box-sizing: border-box;
}
.filter-scroller dd[data-v-d7cbbe24]:nth-of-type(3n) {
    margin-right: 0;
}
.filter-scroller .fengniao[data-v-d7cbbe24], .filter-scroller .selected-icon[data-v-d7cbbe24] {
    display: none;
    margin: 0 .133333rem 0 .2rem;
    width: .333333rem;
    height: .333333rem;
    vertical-align: middle;
}.filter-scroller .fengniao[data-v-d7cbbe24] {
    display: inline-block;
}.filter-scroller span[data-v-d7cbbe24] {
    vertical-align: middle;
}.filter-scroller dt[data-v-d7cbbe24] {
    margin-bottom: .2rem;
    color: #666;
}.filter-scroller dd[data-v-d7cbbe24] {
    margin: 0;
    float: left;
    width: 32%;
    margin-right: 2%;
    border: 1px solid #ddd;
    padding: .173333rem 0;
    height: .933333rem;
    margin-bottom: .2rem;
    border-radius: .066667rem;
    box-sizing: border-box;
}.filter-scroller i[data-v-d7cbbe24] {
    display: inline-block;
    vertical-align: middle;
    font-style: normal;
    border-width: 1px;
    margin: 0 .133333rem 0 .2rem;
    border-style: solid;
    width: .506667rem;
    line-height: .48rem;
    text-align: center;
    border-radius: .08rem;
    font-size: .32rem;
    box-sizing: border-box;
}.filter-btn[data-v-d7cbbe24] {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #eee;
    background-color: #fafafa;
    padding: 0 .133333rem;
    height: 1.466667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.filter-btn a[data-v-d7cbbe24] {
    font-size: .42rem;
    line-height: 1.093333rem;
    border-radius: .08rem;
    text-align: center;
    text-decoration: none;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
}.filter-btn a[data-v-d7cbbe24]:first-child {
    background-color: #fff;
    border: 1px solid #ddd;
    margin-right: .266667rem;
    color: #333;
}.filter-btn a[data-v-d7cbbe24]:last-child {
    color: #fff;
    background-color: #56d176;
    border: 1px solid #56d176;
}
.filter-nav[data-v-98a11d7e]:after {
    content: "";
    background: #ddd;
    width: 1px;
    height: .56rem;
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.filter-category ul:nth-of-type(2) {
    margin-left: .4rem;
    padding-right: .133333rem;
}
.filter-category ul:nth-of-type(2) img {
    margin-right: .2rem;
    width: .666667rem;
    height: .666667rem;
    vertical-align: middle;
}
.filter-category ul:nth-of-type(2) li.active, .filter-category ul:nth-of-type(2) li.active .count {
    color: #3190e8;
}
.filter-sort li.active[data-v-fd238482] {
    color: #0089dc;
}
.filter-sort li.active .selected[data-v-fd238482] {
    display: block;
}
.filter-nav.active[data-v-98a11d7e] {
    color: #3190e8;
}
.filter-scroller .fengniao[data-v-d7cbbe24] {
    display: inline-block;
}
.filter-scroller dd.selected .selected-icon[data-v-d7cbbe24] {
    display: inline-block;
}.filter-modal[data-v-98a11d7e] {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0,0,0,.2);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}.filter-modal.open[data-v-98a11d7e] {
    opacity: 1;
    visibility: visible;
}
.filter-scroller dd.selected[data-v-d7cbbe24] {
    border-color: #a2d2ff;
    color: #3190e8;
    background-color: #edf5ff;
}
.filter-scroller dd.selected .fengniao[data-v-d7cbbe24], .filter-scroller dd.selected i[data-v-d7cbbe24] {
    display: none;
}
.filter-scroller dd.selected .selected-icon[data-v-d7cbbe24] {
    display: inline-block;
}
.filter-nav>svg[data-v-98a11d7e] {
    width: .24rem;
    height: .106667rem;
    margin-bottom: .053333rem;
    fill: #999;
    will-change: transform;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.filter-nav.active>svg[data-v-98a11d7e] {
    fill: currentColor;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}.filter-nav-more.active svg[data-v-98a11d7e] {
    fill: #3190e8;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
</style>