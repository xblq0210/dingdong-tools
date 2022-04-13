let request = require('request')
let child_process = require('child_process')

// 注意 建议使用 postman 将 抓包拿到 的curl 信息转化为 node request 形式
let options = {
  method: 'POST',
  url: 'https://maicai.api.ddxq.mobi/order/getMultiReserveTime',
  'headers': {
    'Host': 'maicai.api.ddxq.mobi',
    'Connection': 'keep-alive',
    'Content-Length': '11573',
    'content-type': 'application/x-www-form-urlencoded',
    'ddmc-city-number': '0101',
    'ddmc-build-version': '2.82.0',
    'ddmc-device-id': 'osP8I0fxSj5s47UgdWi0HCI16-7s',
    'ddmc-station-id': '5b1f5f8145cd42e84a8c6c6b',
    'ddmc-channel': 'applet',
    'ddmc-os-version': '[object Undefined]',
    'ddmc-app-client-id': '4',
    'Cookie': 'DDXQSESSID=0e964e19a3ac916c265c2cd0d2892f28',
    'ddmc-ip': '',
    'ddmc-longitude': '121.337397',
    'ddmc-latitude': '31.436978',
    'ddmc-api-version': '9.49.2',
    'ddmc-uid': '6251fd30845f8000011c3429',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001426) NetType/WIFI Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx1e113254eda17715/422/page-frame.html'
  },
  form: {
    'uid': '6251fd30845f8000011c3429',
    'longitude': '121.337397',
    'latitude': '31.436978',
    'station_id': '5b1f5f8145cd42e84a8c6c6b',
    'city_number': '0101',
    'api_version': '9.49.2',
    'app_version': '2.82.0',
    'applet_source': '',
    'channel': 'applet',
    'app_client_id': '4',
    'sharer_uid': '',
    's_id': '0e964e19a3ac916c265c2cd0d2892f28',
    'openid': 'osP8I0fxSj5s47UgdWi0HCI16-7s',
    'h5_source': '',
    'device_token': 'WFWVc5eQ20p7KRo9sUbVoHXDqyCR8vd6WTHnxUUki69WI5z+bO0fWVaWCzasR/G/shSRmkEoYng+lHm1BkMwvqhe9dIfO+2JXLQ2FUPCwgjG/w8gZjQgjCg==1487577677129',
    'address_id': '6255ef41902c1500014e868f',
    'group_config_id': '',
    'products': '[[{"type":1,"id":"5ef9b847b0055a4b895fafc0","price":"3.50","count":8,"description":"","sizes":[],"cart_id":"5ef9b847b0055a4b895fafc0","parent_id":"","parent_batch_type":-1,"category_path":"58f9e5b3936edfe3568b5742,58fb40ec936edf42508b45cd","manage_category_path":"330,380,381","activity_id":"","sku_activity_id":"","conditions_num":"","product_name":"乌江鲜脆榨菜丝 70g/袋","product_type":0,"small_image":"https://imgnew.ddimg.mobi/product/be02bc4155384196bf0e06d81437cb43.jpg?width=800&height=800","total_price":"28.00","origin_price":"3.50","total_origin_price":"28.00","no_supplementary_price":"3.50","no_supplementary_total_price":"28.00","size_price":"0.00","buy_limit":0,"price_type":0,"promotion_num":0,"instant_rebate_money":"0.00","is_invoice":1,"sub_list":[],"is_booking":0,"is_bulk":0,"view_total_weight":"袋","net_weight":"70","net_weight_unit":"g","storage_value_id":0,"temperature_layer":"","sale_batches":{"batch_type":-1},"is_shared_station_product":0,"is_gift":0,"supplementary_list":[],"order_sort":1,"is_presale":0},{"type":1,"id":"609e87205b3a841c0d187d92","price":"6.50","count":8,"description":"","sizes":[],"cart_id":"609e87205b3a841c0d187d92","parent_id":"","parent_batch_type":-1,"category_path":"","manage_category_path":"387,388,390","activity_id":"","sku_activity_id":"","conditions_num":"","product_name":"日清合味道海鲜风味杯面 76g/杯","product_type":0,"small_image":"https://img.ddimg.mobi/product/c7097ef68b3ca461ab5213725e919f06.jpg","total_price":"52.00","origin_price":"6.50","total_origin_price":"52.00","no_supplementary_price":"6.50","no_supplementary_total_price":"52.00","size_price":"0.00","buy_limit":0,"price_type":0,"promotion_num":0,"instant_rebate_money":"0.00","is_invoice":1,"sub_list":[],"is_booking":0,"is_bulk":0,"view_total_weight":"份","net_weight":"76","net_weight_unit":"g","storage_value_id":0,"temperature_layer":"","sale_batches":{"batch_type":-1},"is_shared_station_product":0,"is_gift":0,"supplementary_list":[],"order_sort":2,"is_presale":0},{"type":1,"id":"614d8e6f124528a2d271cd48","price":"19.90","count":8,"description":"","sizes":[],"cart_id":"614d8e6f124528a2d271cd48","parent_id":"","parent_batch_type":-1,"category_path":"","manage_category_path":"387,405,409","activity_id":"","sku_activity_id":"","conditions_num":"","product_name":"中粮梅林午餐肉罐头（梅系列） 340g","product_type":0,"small_image":"https://imgnew.ddimg.mobi/product/04b7814a23d6406f9472218945e3123b.jpg?width=800&height=800","total_price":"159.20","origin_price":"19.90","total_origin_price":"159.20","no_supplementary_price":"19.90","no_supplementary_total_price":"159.20","size_price":"0.00","buy_limit":0,"price_type":0,"promotion_num":0,"instant_rebate_money":"0.00","is_invoice":1,"sub_list":[],"is_booking":0,"is_bulk":0,"view_total_weight":"罐","net_weight":"340","net_weight_unit":"g","storage_value_id":0,"temperature_layer":"","sale_batches":{"batch_type":-1},"is_shared_station_product":0,"is_gift":0,"supplementary_list":[],"order_sort":3,"is_presale":0},{"type":1,"id":"5970229e936edfa36e91a28c","price":"4.20","count":4,"description":"","sizes":[],"cart_id":"5970229e936edfa36e91a28c","parent_id":"","parent_batch_type":-1,"category_path":"59701e80936edf4f38915857,5b0ff8c306752edd278bdbe1","manage_category_path":"493,507,511","activity_id":"","sku_activity_id":"","conditions_num":"","product_name":"上好佳鲜虾片 40g/袋","product_type":0,"small_image":"https://ddimg.ddxq.mobi/2219dec0b270781541952426376.jpg!maicai.product.list","total_price":"16.80","origin_price":"4.20","total_origin_price":"16.80","no_supplementary_price":"4.20","no_supplementary_total_price":"16.80","size_price":"0.00","buy_limit":0,"price_type":0,"promotion_num":0,"instant_rebate_money":"0.00","is_invoice":1,"sub_list":[],"is_booking":0,"is_bulk":0,"view_total_weight":"袋","net_weight":"40","net_weight_unit":"g","storage_value_id":0,"temperature_layer":"","sale_batches":{"batch_type":-1},"is_shared_station_product":0,"is_gift":0,"supplementary_list":[],"order_sort":4,"is_presale":0},{"type":1,"id":"5b1621c4c0a1ea7f338b461f","price":"10.90","count":3,"description":"","sizes":[],"cart_id":"5b1621c4c0a1ea7f338b461f","parent_id":"","parent_batch_type":-1,"category_path":"58f9e574936edfe4568b5789,58fb39fe936edfe4568b58ad","manage_category_path":"201,221,223","activity_id":"","sku_activity_id":"","conditions_num":"","product_name":"德亚全脂牛奶 1L/盒","product_type":0,"small_image":"https://img.ddimg.mobi/product/f64d9fa300e121605065246907.jpg?width=800&height=800","total_price":"32.70","origin_price":"10.90","total_origin_price":"32.70","no_supplementary_price":"10.90","no_supplementary_total_price":"32.70","size_price":"0.00","buy_limit":0,"price_type":0,"promotion_num":0,"instant_rebate_money":"0.00","is_invoice":1,"sub_list":[],"is_booking":0,"is_bulk":0,"view_total_weight":"盒","net_weight":"1000","net_weight_unit":"ml","storage_value_id":0,"temperature_layer":"","sale_batches":{"batch_type":-1},"is_shared_station_product":0,"is_gift":0,"supplementary_list":[],"order_sort":12,"is_presale":0},{"type":1,"id":"5ab49e14c0a1ea3c698b460e","price":"13.50","count":4,"description":"","sizes":[],"cart_id":"5ab49e14c0a1ea3c698b460e","parent_id":"","parent_batch_type":-1,"category_path":"58f9e5c4936edfe4568b5793,58fb4119936edfe6568b5a53","manage_category_path":"440,457,458","activity_id":"","sku_activity_id":"","conditions_num":"","product_name":"百事可乐 330ml*6罐","product_type":0,"small_image":"https://img.ddimg.mobi/product/13cc98b4cfe491598875475424.jpg!deliver.product.list","total_price":"54.00","origin_price":"13.50","total_origin_price":"54.00","no_supplementary_price":"13.50","no_supplementary_total_price":"54.00","size_price":"0.00","buy_limit":0,"price_type":0,"promotion_num":0,"instant_rebate_money":"0.00","is_invoice":1,"sub_list":[],"is_booking":0,"is_bulk":0,"view_total_weight":"份","net_weight":"1980","net_weight_unit":"ml","storage_value_id":0,"temperature_layer":"","sale_batches":{"batch_type":-1},"is_shared_station_product":0,"is_gift":0,"supplementary_list":[],"order_sort":15,"is_presale":0},{"type":1,"id":"58bbc04c916edfac4cc2846b","price":"12.70","count":8,"description":"","sizes":[],"cart_id":"58bbc04c916edfac4cc2846b","parent_id":"","parent_batch_type":-1,"category_path":"58f9e574936edfe4568b5789,5b10162cc5702eb0168c4240","manage_category_path":"201,208,209","activity_id":"","sku_activity_id":"","conditions_num":"","product_name":"养乐多（低糖） 100ml*5瓶","product_type":0,"small_image":"https://img.ddimg.mobi/product/60ebf10153eeb1614059132461.jpg?width=800&height=800","total_price":"101.60","origin_price":"12.70","total_origin_price":"101.60","no_supplementary_price":"12.70","no_supplementary_total_price":"101.60","size_price":"0.00","buy_limit":0,"price_type":0,"promotion_num":0,"instant_rebate_money":"0.00","is_invoice":1,"sub_list":[],"is_booking":0,"is_bulk":0,"view_total_weight":"份","net_weight":"500","net_weight_unit":"ml","storage_value_id":2,"temperature_layer":"0~4℃","sale_batches":{"batch_type":-1},"is_shared_station_product":0,"is_gift":0,"supplementary_list":[],"order_sort":17,"is_presale":0}]]',
    'isBridge': 'false',
    'nars': '785db0b4501fcc4b1ae06fa69a813089',
    'sesi': 'GJ5EIQ70d0bff659292f90d4711975c33870b74'
  }
};

//BarkId 需要安装bark 后在自己app 里获取
let curl = "curl 'https://api.day.app/2jHCdKsiQQihpWyp7A7bHK/
/叮咚买菜有可用配送时段请尽快下单?sound=minuet'"

function checkMultiReserveTime(times) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      request(options, function (error, response) {
        if (error) {
          console.log(error)
          reject()
        }

        let res = JSON.parse(response.body)

        if (!res.success) return console.log(res)

        if (!(res.data && res.data[0] && res.data[0].time[0] && res.data[0].time[0].times)) {
          return console.log(res)
        }

        let times = res.data[0].time[0].times

        if (
          times.some(i => {
            return i.fullFlag == false
          })
        ) {
          console.log('🎉 恭喜 发现可用的配送时段 请尽快下单!')
          child_process.exec(curl)
        } else {
          console.log('当前无可用配送时段 15秒后再试...')
        }

        resolve()
      })
    }, times)
  })
}

async function loop() {
  while (true) {
    await checkMultiReserveTime(15 * 1000)
  }
}

console.log('正在检查是否有可用配送时段...')
loop()
