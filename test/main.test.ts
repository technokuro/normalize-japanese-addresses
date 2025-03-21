import { normalize } from '../src/main'

test('大阪府堺市北区新金岡町4丁1−8', async () => {
  const res = await normalize('大阪府堺市北区新金岡町4丁1−8')
  expect(res).toStrictEqual({"pref": "大阪府", "city": "堺市北区", "town": "新金岡町四丁", "addr": "1-8", "lat": 34.568184, "lng": 135.519409, "level": 3})
})

test('大阪府堺市北区新金岡町４丁１ー８', async () => {
  const res = await normalize('大阪府堺市北区新金岡町４丁１ー８')
  expect(res).toStrictEqual({"pref": "大阪府", "city": "堺市北区", "town": "新金岡町四丁", "addr": "1-8", "lat": 34.568184, "lng": 135.519409, "level": 3})
})

test('和歌山県串本町串本1234', async () => {
  const res = await normalize('和歌山県串本町串本1234')
  expect(res).toStrictEqual({"pref": "和歌山県", "city": "東牟婁郡串本町", "town": "串本", "addr": "1234", "lat": 33.470358, "lng": 135.779952, "level": 3})
})

test('和歌山県東牟婁郡串本町串本1234', async () => {
  const res = await normalize('和歌山県東牟婁郡串本町串本1234')
  expect(res).toStrictEqual({"pref": "和歌山県", "city": "東牟婁郡串本町", "town": "串本", "addr": "1234", "lat": 33.470358, "lng": 135.779952, "level": 3})
})

test('和歌山県東牟婁郡串本町串本千二百三十四', async () => {
  const res = await normalize('和歌山県東牟婁郡串本町串本千二百三十四')
  expect(res).toStrictEqual({"pref": "和歌山県", "city": "東牟婁郡串本町", "town": "串本", "addr": "1234", "lat": 33.470358, "lng": 135.779952, "level": 3})
})

test('和歌山県東牟婁郡串本町串本一千二百三十四', async () => {
  const res = await normalize('和歌山県東牟婁郡串本町串本一千二百三十四')
  expect(res).toStrictEqual({"pref": "和歌山県", "city": "東牟婁郡串本町", "town": "串本", "addr": "1234", "lat": 33.470358, "lng": 135.779952, "level": 3})
})

test('和歌山県東牟婁郡串本町串本一二三四', async () => {
  const res = await normalize('和歌山県東牟婁郡串本町串本一二三四')
  expect(res).toStrictEqual({"pref": "和歌山県", "city": "東牟婁郡串本町", "town": "串本", "addr": "1234", "lat": 33.470358, "lng": 135.779952, "level": 3})
})

test('和歌山県東牟婁郡串本町くじ野川一二三四', async () => {
  const res = await normalize('和歌山県東牟婁郡串本町くじ野川一二三四')
  expect(res).toStrictEqual({"pref": "和歌山県", "city": "東牟婁郡串本町", "town": "鬮野川", "addr": "1234", "lat": 33.493026, "lng": 135.784941, "level": 3})
})

test('京都府京都市中京区寺町通御池上る上本能寺前町488番地', async () => {
  const res = await normalize(
    '京都府京都市中京区寺町通御池上る上本能寺前町488番地',
  )
  expect(res).toStrictEqual({"pref": "京都府", "city": "京都市中京区", "town": "上本能寺前町", "addr": "488", "lat": 35.011582, "lng": 135.767914, "level": 3})
})

test('京都府京都市中京区上本能寺前町488', async () => {
  const res = await normalize('京都府京都市中京区上本能寺前町488')
  expect(res).toStrictEqual({"pref": "京都府", "city": "京都市中京区", "town": "上本能寺前町", "addr": "488", "lat": 35.011582, "lng": 135.767914, "level": 3})
})

test('大阪府大阪市中央区大手前２-１', async () => {
  const res = await normalize('大阪府大阪市中央区大手前２-１')
  expect(res).toStrictEqual({"pref": "大阪府", "city": "大阪市中央区", "town": "大手前二丁目", "addr": "1", "lat": 34.687006, "lng": 135.519317, "level": 3})
})

test('北海道札幌市西区二十四軒二条2丁目3番3号', async () => {
  const res = await normalize('北海道札幌市西区24-2-2-3-3')
  expect(res).toStrictEqual({"pref": "北海道", "city": "札幌市西区", "town": "二十四軒二条二丁目", "addr": "3-3", "lat": 43.074273, "lng": 141.315099, "level": 3})
})

test('京都府京都市東山区大和大路2-537-1', async () => {
  const res = await normalize('京都府京都市東山区大和大路2-537-1')
  expect(res).toStrictEqual({"pref": "京都府", "city": "京都市東山区", "town": "大和大路二丁目", "addr": "537-1", "lat": 34.989944, "lng": 135.770967, "level": 3})
})

test('京都府京都市東山区大和大路2丁目五百三十七-1', async () => {
  const res = await normalize('京都府京都市東山区大和大路2丁目五百三十七の1')
  expect(res).toStrictEqual({"pref": "京都府", "city": "京都市東山区", "town": "大和大路二丁目", "addr": "537-1", "lat": 34.989944, "lng": 135.770967, "level": 3})
})

test('愛知県蒲郡市旭町17番1号', async () => {
  const res = await normalize('愛知県蒲郡市旭町17番1号')
  expect(res).toStrictEqual({"pref": "愛知県", "city": "蒲郡市", "town": "旭町", "addr": "17-1", "lat": 34.825785, "lng": 137.218621, "level": 3})
})

test('北海道岩見沢市栗沢町万字寿町１−２', async () => {
  const res = await normalize('北海道岩見沢市栗沢町万字寿町１−２')
  expect(res).toStrictEqual({"pref": "北海道", "city": "岩見沢市", "town": "栗沢町万字寿町", "addr": "1-2", "lat": 43.135248, "lng": 141.986658, "level": 3})
})

test('北海道久遠郡せたな町北檜山区北檜山１９３', async () => {
  const res = await normalize('北海道久遠郡せたな町北檜山区北檜山１９３')
  expect(res).toStrictEqual({"pref": "北海道", "city": "久遠郡せたな町", "town": "北檜山区北檜山", "addr": "193", "lat": 42.414, "lng": 139.881784, "level": 3})
})

test('北海道久遠郡せたな町北桧山区北桧山１９３', async () => {
  const res = await normalize('北海道久遠郡せたな町北桧山区北桧山１９３')
  expect(res).toStrictEqual({"pref": "北海道", "city": "久遠郡せたな町", "town": "北檜山区北檜山", "addr": "193", "lat": 42.414, "lng": 139.881784, "level": 3})
})

test('京都府京都市中京区錦小路通大宮東入七軒町466', async () => {
  const res = await normalize('京都府京都市中京区錦小路通大宮東入七軒町466')
  expect(res).toStrictEqual({"pref": "京都府", "city": "京都市中京区", "town": "七軒町", "addr": "466", "lat": 35.004829, "lng": 135.749797, "level": 3})
})

test('栃木県佐野市七軒町2201', async () => {
  const res = await normalize('栃木県佐野市七軒町2201')
  expect(res).toStrictEqual({"pref": "栃木県", "city": "佐野市", "town": "七軒町", "addr": "2201", "lat": 36.305969, "lng": 139.57389, "level": 3})
})

test('京都府京都市東山区大和大路通三条下る東入若松町393', async () => {
  const res = await normalize('京都府京都市東山区大和大路通三条下る東入若松町393')
  expect(res).toStrictEqual({"pref": "京都府", "city": "京都市東山区", "town": "若松町", "addr": "393", "lat": 35.007967, "lng": 135.774082, "level": 3})
})

test('長野県長野市長野東之門町2462', async () => {
  const res = await normalize('長野県長野市長野東之門町2462')
  expect(res).toStrictEqual({"pref": "長野県", "city": "長野市", "town": "大字長野", "addr": "東之門町2462", "lat": 36.674892, "lng": 138.178449, "level": 3})
})

test('岩手県下閉伊郡普代村第１地割上村４３−２５', async () => {
  const res = await normalize('岩手県下閉伊郡普代村第１地割上村４３−２５')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "下閉伊郡普代村", "town": "第一地割字上村", "addr": "43-25", "lat": 39.990149, "lng": 141.928282, "level": 3})
})

test('岩手県花巻市下北万丁目１７４−１', async () => {
  const res = await normalize('岩手県花巻市下北万丁目１７４−１')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "花巻市", "town": "下北万丁目", "addr": "174-1", "lat": 39.394178, "lng": 141.099889, "level": 3})
})

test('岩手県花巻市十二丁目１１９２', async () => {
  const res = await normalize('岩手県花巻市十二丁目１１９２')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "花巻市", "town": "十二丁目", "addr": "1192", "lat": 39.358268, "lng": 141.122331, "level": 3})
})

test('岩手県滝沢市後２６８−５６６', async () => {
  const res = await normalize('岩手県滝沢市後２６８−５６６')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "滝沢市", "town": "後", "addr": "268-566", "lat": 39.839043, "lng": 141.094179, "level": 3})
})

test('青森県五所川原市金木町喜良市千苅６２−８', async () => {
  const res = await normalize('青森県五所川原市金木町喜良市千苅６２−８')
  expect(res).toStrictEqual({"pref": "青森県", "city": "五所川原市", "town": "金木町喜良市", "addr": "千苅62-8", "lat": 40.904317, "lng": 140.486676, "level": 3})
})

test('岩手県盛岡市盛岡駅西通２丁目９番地１号', async () => {
  const res = await normalize('岩手県盛岡市盛岡駅西通２丁目９番地１号')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "盛岡市", "town": "盛岡駅西通二丁目", "addr": "9-1", "lat": 39.698721, "lng": 141.135252, "level": 3})
})

test('岩手県盛岡市盛岡駅西通２丁目９の１', async () => {
  const res = await normalize('岩手県盛岡市盛岡駅西通２丁目９の１')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "盛岡市", "town": "盛岡駅西通二丁目", "addr": "9-1", "lat": 39.698721, "lng": 141.135252, "level": 3})
})

test('岩手県盛岡市盛岡駅西通２の９の１', async () => {
  const res = await normalize('岩手県盛岡市盛岡駅西通２の９の１')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "盛岡市", "town": "盛岡駅西通二丁目", "addr": "9-1", "lat": 39.698721, "lng": 141.135252, "level": 3})
})

test('岩手県盛岡市盛岡駅西通２丁目９番地１号', async () => {
  const res = await normalize('岩手県盛岡市盛岡駅西通２丁目９番地１号 マリオス10F')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "盛岡市", "town": "盛岡駅西通二丁目", "addr": "9-1 マリオス10F", "lat": 39.698721, "lng": 141.135252, "level": 3})
})

test('東京都文京区千石4丁目15－7', async () => {
  const res = await normalize('東京都文京区千石4丁目15-7')
  expect(res).toStrictEqual({"pref": "東京都", "city": "文京区", "town": "千石四丁目", "addr": "15-7", "lat": 35.729052, "lng": 139.740683, "level": 3})
})

test('東京都文京区千石四丁目15－7', async () => {
  const res = await normalize('東京都文京区千石四丁目15-7')
  expect(res).toStrictEqual({"pref": "東京都", "city": "文京区", "town": "千石四丁目", "addr": "15-7", "lat": 35.729052, "lng": 139.740683, "level": 3})
})

test('東京都文京区千石4丁目15－7', async () => {
  const res = await normalize('東京都文京区千石4丁目15－7')
  expect(res).toStrictEqual({"pref": "東京都", "city": "文京区", "town": "千石四丁目", "addr": "15-7", "lat": 35.729052, "lng": 139.740683, "level": 3})
})

test('東京都 文京区千石4丁目15－7', async () => {
  const res = await normalize('東京都 文京区千石4丁目15－7')
  expect(res).toStrictEqual({"pref": "東京都", "city": "文京区", "town": "千石四丁目", "addr": "15-7", "lat": 35.729052, "lng": 139.740683, "level": 3})
})

test('東京都文京区 千石4丁目15－7', async () => {
  const res = await normalize('東京都文京区 千石4丁目15－7')
  expect(res).toStrictEqual({"pref": "東京都", "city": "文京区", "town": "千石四丁目", "addr": "15-7", "lat": 35.729052, "lng": 139.740683, "level": 3})
})

test('東京都文京区千石4-15-7 ', async () => {
  const res = await normalize('東京都文京区千石4-15-7 ')
  expect(res).toStrictEqual({"pref": "東京都", "city": "文京区", "town": "千石四丁目", "addr": "15-7", "lat": 35.729052, "lng": 139.740683, "level": 3})
})

test('和歌山県東牟婁郡串本町串本 833', async () => {
  const res = await normalize('和歌山県東牟婁郡串本町串本 833')
  expect(res).toStrictEqual({"pref": "和歌山県", "city": "東牟婁郡串本町", "town": "串本", "addr": "833", "lat": 33.470358, "lng": 135.779952, "level": 3})
})

test('和歌山県東牟婁郡串本町串本　833', async () => {
  const res = await normalize('和歌山県東牟婁郡串本町串本　833')
  expect(res).toStrictEqual({"pref": "和歌山県", "city": "東牟婁郡串本町", "town": "串本", "addr": "833", "lat": 33.470358, "lng": 135.779952, "level": 3})
})

test('東京都世田谷区上北沢４の９の２', async () => {
  const res = await normalize('東京都世田谷区上北沢４の９の２')
  expect(res).toStrictEqual({"pref": "東京都", "city": "世田谷区", "town": "上北沢四丁目", "addr": "9-2", "lat": 35.669726, "lng": 139.620901, "level": 3})
})

test('東京都品川区東五反田２丁目５－１１', async () => {
  const res = await normalize('東京都品川区東五反田２丁目５－１１')
  expect(res).toStrictEqual({"pref": "東京都", "city": "品川区", "town": "東五反田二丁目", "addr": "5-11", "lat": 35.624169, "lng": 139.72819, "level": 3})
})

test('東京都世田谷区上北沢四丁目2-1', async () => {
  const res = await normalize('東京都世田谷区上北沢四丁目2-1')
  expect(res).toStrictEqual({"pref": "東京都", "city": "世田谷区", "town": "上北沢四丁目", "addr": "2-1", "lat": 35.669726, "lng": 139.620901, "level": 3})
})

test('東京都世田谷区上北沢4-2-1', async () => {
  const res = await normalize('東京都世田谷区上北沢4-2-1')
  expect(res).toStrictEqual({"pref": "東京都", "city": "世田谷区", "town": "上北沢四丁目", "addr": "2-1", "lat": 35.669726, "lng": 139.620901, "level": 3})
})

test('東京都世田谷区上北沢４ー２ー１', async () => {
  const res = await normalize('東京都世田谷区上北沢４ー２ー１')
  expect(res).toStrictEqual({"pref": "東京都", "city": "世田谷区", "town": "上北沢四丁目", "addr": "2-1", "lat": 35.669726, "lng": 139.620901, "level": 3})
})

test('東京都世田谷区上北沢４－２－１', async () => {
  const res = await normalize('東京都世田谷区上北沢４－２－１')
  expect(res).toStrictEqual({"pref": "東京都", "city": "世田谷区", "town": "上北沢四丁目", "addr": "2-1", "lat": 35.669726, "lng": 139.620901, "level": 3})
})

test('東京都品川区西五反田2丁目31-6', async () => {
  const res = await normalize('東京都品川区西五反田2丁目31-6')
  expect(res).toStrictEqual({"pref": "東京都", "city": "品川区", "town": "西五反田二丁目", "addr": "31-6", "lat": 35.626368, "lng": 139.721005, "level": 3})
})

test('東京都品川区西五反田2-31-6', async () => {
  const res = await normalize('東京都品川区西五反田2-31-6')
  expect(res).toStrictEqual({"pref": "東京都", "city": "品川区", "town": "西五反田二丁目", "addr": "31-6", "lat": 35.626368, "lng": 139.721005, "level": 3})
})

test('大阪府大阪市此花区西九条三丁目２－１６', async () => {
  const res = await normalize('大阪府大阪市此花区西九条三丁目２－１６')
  expect(res).toStrictEqual({"pref": "大阪府", "city": "大阪市此花区", "town": "西九条三丁目", "addr": "2-16", "lat": 34.684074, "lng": 135.467031, "level": 3})
})

test('大阪府大阪市此花区西九条三丁目2番16号', async () => {
  const res = await normalize('大阪府大阪市此花区西九条三丁目2番16号')
  expect(res).toStrictEqual({"pref": "大阪府", "city": "大阪市此花区", "town": "西九条三丁目", "addr": "2-16", "lat": 34.684074, "lng": 135.467031, "level": 3})
})

test('大阪府大阪市此花区西九条3-2-16', async () => {
  const res = await normalize('大阪府大阪市此花区西九条3-2-16')
  expect(res).toStrictEqual({"pref": "大阪府", "city": "大阪市此花区", "town": "西九条三丁目", "addr": "2-16", "lat": 34.684074, "lng": 135.467031, "level": 3})
})

test('大阪府大阪市此花区西九条３丁目２－１６', async () => {
  const res = await normalize('大阪府大阪市此花区西九条３丁目２－１６')
  expect(res).toStrictEqual({"pref": "大阪府", "city": "大阪市此花区", "town": "西九条三丁目", "addr": "2-16", "lat": 34.684074, "lng": 135.467031, "level": 3})
})

test('大阪府大阪市此花区西九条3-2-16', async () => {
  const res = await normalize('大阪府大阪市此花区西九条3-2-16')
  expect(res).toStrictEqual({"pref": "大阪府", "city": "大阪市此花区", "town": "西九条三丁目", "addr": "2-16", "lat": 34.684074, "lng": 135.467031, "level": 3})
})

test('千葉県鎌ケ谷市中佐津間２丁目１５－１４－９', async () => {
  const res = await normalize('千葉県鎌ケ谷市中佐津間２丁目１５－１４－９')
  expect(res).toStrictEqual({"pref": "千葉県", "city": "鎌ヶ谷市", "town": "中佐津間二丁目", "addr": "15-14-9", "lat": 35.800253, "lng": 140.002133, "level": 3})
})

test('岐阜県不破郡関ケ原町関ヶ原１７０１−６', async () => {
  const res = await normalize('岐阜県不破郡関ケ原町関ヶ原１７０１−６')
  expect(res).toStrictEqual({"pref": "岐阜県", "city": "不破郡関ケ原町", "town": "大字関ケ原", "addr": "1701-6", "lat": 35.368524, "lng": 136.464997, "level": 3})
})

test('岐阜県関ケ原町関ヶ原１７０１−６', async () => {
  const res = await normalize('岐阜県関ケ原町関ヶ原１７０１−６')
  expect(res).toStrictEqual({"pref": "岐阜県", "city": "不破郡関ケ原町", "town": "大字関ケ原", "addr": "1701-6", "lat": 35.368524, "lng": 136.464997, "level": 3})
})

test('東京都町田市木曽東4丁目14-イ22', async () => {
  const res = await normalize('東京都町田市木曽東4丁目14-イ22')
  expect(res).toStrictEqual({"pref": "東京都", "city": "町田市", "town": "木曽東四丁目", "addr": "14-イ22", "lat": 35.564817, "lng": 139.429661, "level": 3})
})

test('東京都町田市木曽東4丁目14-イ22', async () => {
  const res = await normalize('東京都町田市木曽東4丁目14ーイ22')
  expect(res).toStrictEqual({"pref": "東京都", "city": "町田市", "town": "木曽東四丁目", "addr": "14-イ22", "lat": 35.564817, "lng": 139.429661, "level": 3})
})

test('東京都町田市木曽東4丁目14-イ22', async () => {
  const res = await normalize('東京都町田市木曽東四丁目十四ーイ二十二')
  expect(res).toStrictEqual({"pref": "東京都", "city": "町田市", "town": "木曽東四丁目", "addr": "14-イ22", "lat": 35.564817, "lng": 139.429661, "level": 3})
})

test('東京都町田市木曽東4丁目14-イ22', async () => {
  const res = await normalize('東京都町田市木曽東四丁目１４ーイ２２')
  expect(res).toStrictEqual({"pref": "東京都", "city": "町田市", "town": "木曽東四丁目", "addr": "14-イ22", "lat": 35.564817, "lng": 139.429661, "level": 3})
})

test('東京都町田市木曽東4丁目14のイ22', async () => {
  const res = await normalize('東京都町田市木曽東四丁目１４のイ２２')
  expect(res).toStrictEqual({"pref": "東京都", "city": "町田市", "town": "木曽東四丁目", "addr": "14-イ22", "lat": 35.564817, "lng": 139.429661, "level": 3})
})

test('岩手県花巻市南万丁目127', async () => {
  const res = await normalize('岩手県花巻市南万丁目127')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "花巻市", "town": "南万丁目", "addr": "127", "lat": 39.387522, "lng": 141.088029, "level": 3})
})

test('和歌山県東牟婁郡串本町田並1512', async () => {
  const res = await normalize('和歌山県東牟婁郡串本町田並1512')
  expect(res).toStrictEqual({"pref": "和歌山県", "city": "東牟婁郡串本町", "town": "田並", "addr": "1512", "lat": 33.48681, "lng": 135.717844, "level": 3})
})

test('神奈川県川崎市多摩区東三田1-2-2', async () => {
  const res = await normalize('神奈川県川崎市多摩区東三田1-2-2')
  expect(res).toStrictEqual({"pref": "神奈川県", "city": "川崎市多摩区", "town": "東三田一丁目", "addr": "2-2", "lat": 35.612653, "lng": 139.549014, "level": 3})
})

test('東京都町田市木曽東４の１４のイ２２', async () => {
  const res = await normalize('東京都町田市木曽東４の１４のイ２２')
  expect(res).toStrictEqual({"pref": "東京都", "city": "町田市", "town": "木曽東四丁目", "addr": "14-イ22", "lat": 35.564817, "lng": 139.429661, "level": 3})
})

test('東京都町田市木曽東４ー１４ーイ２２', async () => {
  const res = await normalize('東京都町田市木曽東４ー１４ーイ２２')
  expect(res).toStrictEqual({"pref": "東京都", "city": "町田市", "town": "木曽東四丁目", "addr": "14-イ22", "lat": 35.564817, "lng": 139.429661, "level": 3})
})

test('富山県富山市三番町1番23号', async () => {
  const res = await normalize('富山県富山市三番町1番23号')
  expect(res).toStrictEqual({"pref": "富山県", "city": "富山市", "town": "三番町", "addr": "1-23", "lat": 36.688141, "lng": 137.217397, "level": 3})
})

test('富山県富山市3-1-23', async () => {
  const res = await normalize('富山県富山市3-1-23')
  expect(res).toStrictEqual({"pref": "富山県", "city": "富山市", "town": "三番町", "addr": "1-23", "lat": 36.688141, "lng": 137.217397, "level": 3})
})

test('富山県富山市中央通り3-1-23', async () => {
  const res = await normalize('富山県富山市中央通り3-1-23')
  expect(res).toStrictEqual({"pref": "富山県", "city": "富山市", "town": "中央通り三丁目", "addr": "1-23", "lat": 36.689604, "lng": 137.222128, "level": 3})
})

test('埼玉県南埼玉郡宮代町大字国納３０9－１', async () => {
  const res = await normalize('埼玉県南埼玉郡宮代町大字国納３０9－１')
  expect(res).toStrictEqual({"pref": "埼玉県", "city": "南埼玉郡宮代町", "town": "大字国納", "addr": "309-1", "lat": 36.038996, "lng": 139.697478, "level": 3})
})

test('埼玉県南埼玉郡宮代町国納３０9－１', async () => {
  const res = await normalize('埼玉県南埼玉郡宮代町国納３０9－１')
  expect(res).toStrictEqual({"pref": "埼玉県", "city": "南埼玉郡宮代町", "town": "大字国納", "addr": "309-1", "lat": 36.038996, "lng": 139.697478, "level": 3})
})

test('大阪府高槻市奈佐原２丁目１－２ メゾンエトワール', async () => {
  const res = await normalize('大阪府高槻市奈佐原２丁目１－２ メゾンエトワール')
  expect(res).toStrictEqual({"pref": "大阪府", "city": "高槻市", "town": "奈佐原二丁目", "addr": "1-2 メゾンエトワール", "lat": 34.861189, "lng": 135.579573, "level": 3})
})

test('埼玉県八潮市大字大瀬１丁目１－１', async () => {
  const res = await normalize('埼玉県八潮市大字大瀬１丁目１－１')
  expect(res).toStrictEqual({"pref": "埼玉県", "city": "八潮市", "town": "大瀬一丁目", "addr": "1-1", "lat": 35.808825, "lng": 139.84291, "level": 3})
})

test('岡山県笠岡市大宜1249－1', async () => {
  const res = await normalize('岡山県笠岡市大宜1249－1')
  expect(res).toStrictEqual({"pref": "岡山県", "city": "笠岡市", "town": "大宜", "addr": "1249-1", "lat": 34.506729, "lng": 133.473295, "level": 3})
})

test('岡山県笠岡市大宜1249－1', async () => {
  const res = await normalize('岡山県笠岡市大宜1249－1')
  expect(res).toStrictEqual({"pref": "岡山県", "city": "笠岡市", "town": "大宜", "addr": "1249-1", "lat": 34.506729, "lng": 133.473295, "level": 3})
})

test('岡山県笠岡市大冝1249－1', async () => {
  const res = await normalize('岡山県笠岡市大冝1249－1')
  expect(res).toStrictEqual({"pref": "岡山県", "city": "笠岡市", "town": "大宜", "addr": "1249-1", "lat": 34.506729, "lng": 133.473295, "level": 3})
})

test('岡山県岡山市中区さい33-2', async () => {
  const res = await normalize('岡山県岡山市中区さい33-2')
  expect(res).toStrictEqual({"pref": "岡山県", "city": "岡山市中区", "town": "さい", "addr": "33-2", "lat": 34.680505, "lng": 133.948429, "level": 3})
})

test('岡山県岡山市中区穝33-2', async () => {
  const res = await normalize('岡山県岡山市中区穝33-2')
  expect(res).toStrictEqual({"pref": "岡山県", "city": "岡山市中区", "town": "さい", "addr": "33-2", "lat": 34.680505, "lng": 133.948429, "level": 3})
})

test('千葉県松戸市栄町３丁目１６６－５', async () => {
  const res = await normalize('千葉県松戸市栄町３丁目１６６－５')
  expect(res).toStrictEqual({"pref": "千葉県", "city": "松戸市", "town": "栄町三丁目", "addr": "166-5", "lat": 35.803015, "lng": 139.905619, "level": 3})
})

test('東京都新宿区三栄町１７－１６', async () => {
  const res = await normalize('東京都新宿区三栄町１７－１６')
  expect(res).toStrictEqual({"pref": "東京都", "city": "新宿区", "town": "四谷三栄町", "addr": "17-16", "lat": 35.688757, "lng": 139.725668, "level": 3})
})

test('東京都新宿区三榮町１７－１６', async () => {
  const res = await normalize('東京都新宿区三榮町１７－１６')
  expect(res).toStrictEqual({"pref": "東京都", "city": "新宿区", "town": "四谷三栄町", "addr": "17-16", "lat": 35.688757, "lng": 139.725668, "level": 3})
})

test('新潟県新潟市中央区礎町通１ノ町１９６８−１', async () => {
  const res = await normalize('新潟県新潟市中央区礎町通１ノ町１９６８−１')
  expect(res).toStrictEqual({"pref": "新潟県", "city": "新潟市中央区", "town": "礎町通一ノ町", "addr": "1968-1", "lat": 37.920235, "lng": 139.049572, "level": 3})
})

test('新潟県新潟市中央区礎町通１の町１９６８−１', async () => {
  const res = await normalize('新潟県新潟市中央区礎町通１の町１９６８−１')
  expect(res).toStrictEqual({"pref": "新潟県", "city": "新潟市中央区", "town": "礎町通一ノ町", "addr": "1968-1", "lat": 37.920235, "lng": 139.049572, "level": 3})
})

test('新潟県新潟市中央区礎町通１の町１９６８の１', async () => {
  const res = await normalize('新潟県新潟市中央区礎町通１の町１９６８の１')
  expect(res).toStrictEqual({"pref": "新潟県", "city": "新潟市中央区", "town": "礎町通一ノ町", "addr": "1968-1", "lat": 37.920235, "lng": 139.049572, "level": 3})
})

test('新潟県新潟市中央区礎町通1-1968-1', async () => {
  const res = await normalize('新潟県新潟市中央区礎町通1-1968-1')
  expect(res).toStrictEqual({"pref": "新潟県", "city": "新潟市中央区", "town": "礎町通一ノ町", "addr": "1968-1", "lat": 37.920235, "lng": 139.049572, "level": 3})
})

test('新潟県新潟市中央区上大川前通11番町1881-2', async () => {
  const res = await normalize('新潟県新潟市中央区上大川前通11番町1881-2')
  expect(res).toStrictEqual({"pref": "新潟県", "city": "新潟市中央区", "town": "上大川前通十一番町", "addr": "1881-2", "lat": 37.927874, "lng": 139.049152, "level": 3})
})

test('新潟県新潟市中央区上大川前通11-1881-2', async () => {
  const res = await normalize('新潟県新潟市中央区上大川前通11-1881-2')
  expect(res).toStrictEqual({"pref": "新潟県", "city": "新潟市中央区", "town": "上大川前通十一番町", "addr": "1881-2", "lat": 37.927874, "lng": 139.049152, "level": 3})
})

test('新潟県新潟市中央区上大川前通十一番町1881-2', async () => {
  const res = await normalize('新潟県新潟市中央区上大川前通十一番町1881-2')
  expect(res).toStrictEqual({"pref": "新潟県", "city": "新潟市中央区", "town": "上大川前通十一番町", "addr": "1881-2", "lat": 37.927874, "lng": 139.049152, "level": 3})
})

test('埼玉県上尾市壱丁目１１１', async () => {
  const res = await normalize('埼玉県上尾市壱丁目１１１')
  expect(res).toStrictEqual({"pref": "埼玉県", "city": "上尾市", "town": "大字壱丁目", "addr": "111", "lat": 35.957701, "lng": 139.570578, "level": 3})
})

test('埼玉県上尾市一丁目１１１', async () => {
  const res = await normalize('埼玉県上尾市一丁目１１１')
  expect(res).toStrictEqual({"pref": "埼玉県", "city": "上尾市", "town": "大字壱丁目", "addr": "111", "lat": 35.957701, "lng": 139.570578, "level": 3})
})

test('埼玉県上尾市一町目１１１', async () => {
  const res = await normalize('埼玉県上尾市一町目１１１')
  expect(res).toStrictEqual({"pref": "埼玉県", "city": "上尾市", "town": "大字壱丁目", "addr": "111", "lat": 35.957701, "lng": 139.570578, "level": 3})
})

test('埼玉県上尾市壱町目１１１', async () => {
  const res = await normalize('埼玉県上尾市壱町目１１１')
  expect(res).toStrictEqual({"pref": "埼玉県", "city": "上尾市", "town": "大字壱丁目", "addr": "111", "lat": 35.957701, "lng": 139.570578, "level": 3})
})

test('埼玉県上尾市1-111', async () => {
  const res = await normalize('埼玉県上尾市1-111')
  expect(res).toStrictEqual({"pref": "埼玉県", "city": "上尾市", "town": "大字壱丁目", "addr": "111", "lat": 35.957701, "lng": 139.570578, "level": 3})
})

test('神奈川県横浜市港北区大豆戸町１７番地１１', async () => {
  const res = await normalize('神奈川県横浜市港北区大豆戸町１７番地１１')
  expect(res).toStrictEqual({"pref": "神奈川県", "city": "横浜市港北区", "town": "大豆戸町", "addr": "17-11", "lat": 35.513492, "lng": 139.625651, "level": 3})
})

test('It should get the level `1` with `神奈川県横浜市港北区大豆戸町１７番地１１`', async () => {
  const res = await normalize('神奈川県横浜市港北区大豆戸町１７番地１１', {
    level: 1
  })
  expect(res).toStrictEqual({ "pref": "神奈川県", "city": "", "town": "", "addr": "横浜市港北区大豆戸町17番地11", "lat": null, "lng": null, "level": 1})
})

test('It should get the level `2` with `神奈川県横浜市港北区大豆戸町１７番地１１`', async () => {
  const res = await normalize('神奈川県横浜市港北区大豆戸町１７番地１１', {
    level: 2
  })
  expect(res).toStrictEqual({ "pref": "神奈川県", "city": "横浜市港北区", "town": "", "addr": "大豆戸町17番地11", "lat": null, "lng": null, "level": 2})
})

test('It should get the level `3` with `神奈川県横浜市港北区大豆戸町１７番地１１`', async () => {
  const res = await normalize('神奈川県横浜市港北区大豆戸町１７番地１１', {
    level: 3
  })
  expect(res).toStrictEqual({ "pref": "神奈川県", "city": "横浜市港北区", "town": "大豆戸町", "addr": "17-11", "lat": 35.513492, "lng": 139.625651, "level": 3})
})

test('It should get the level `2` with `神奈川県横浜市港北区`', async () => {
  const res = await normalize('神奈川県横浜市港北区', {
    level: 3
  })
  expect(res).toStrictEqual({ "pref": "神奈川県", "city": "横浜市港北区", "town": "", "addr": "", "lat": null, "lng": null, "level": 2})
})

test('It should get the level `1` with `神奈川県`', async () => {
  const res = await normalize('神奈川県', {
    level: 3
  })
  expect(res).toStrictEqual({ "pref": "神奈川県", "city": "", "town": "", "addr": "", "lat": null, "lng": null, "level": 1})
})

test('It should get the level `1` with `神奈川県あいうえお市`', async () => {
  const res = await normalize('神奈川県あいうえお市')
  expect(res).toStrictEqual({ "pref": "神奈川県", "city": "", "town": "", "addr": "あいうえお市", "lat": null, "lng": null, "level": 1})
})

test('It should get the level `2` with `東京都港区あいうえお`', async () => {
  const res = await normalize('東京都港区あいうえお')
  expect(res).toStrictEqual({ "pref": "東京都", "city": "港区", "town": "", "addr": "あいうえお", "lat": null, "lng": null, "level": 2})
})

test('It should get the level `0` with `あいうえお`', async () => {
  const res = await normalize('あいうえお')
  expect(res).toStrictEqual({ "pref": "", "city": "", "town": "", "addr": "あいうえお", "lat": null, "lng": null, "level": 0})
})

test('東京都江東区豊洲1丁目2-27', async () => {
  const res = await normalize('東京都江東区豊洲1丁目2-27')
  expect(res).toStrictEqual({ "pref": "東京都", "city": "江東区", "town": "豊洲一丁目", "addr": "2-27", "lat": 35.661813, "lng": 139.792044, "level": 3})
})

test('東京都江東区豊洲 1丁目2-27', async () => {
  const res = await normalize('東京都江東区豊洲 1丁目2-27')
  expect(res).toStrictEqual({ "pref": "東京都", "city": "江東区", "town": "豊洲一丁目", "addr": "2-27", "lat": 35.661813, "lng": 139.792044, "level": 3})
})

test('東京都江東区豊洲 1-2-27', async () => {
  const res = await normalize('東京都江東区豊洲 1-2-27')
  expect(res).toStrictEqual({ "pref": "東京都", "city": "江東区", "town": "豊洲一丁目", "addr": "2-27", "lat": 35.661813, "lng": 139.792044, "level": 3})
})

test('東京都 江東区 豊洲 1-2-27', async () => {
  const res = await normalize('東京都 江東区 豊洲 1-2-27')
  expect(res).toStrictEqual({ "pref": "東京都", "city": "江東区", "town": "豊洲一丁目", "addr": "2-27", "lat": 35.661813, "lng": 139.792044, "level": 3})
})

test('東京都江東区豊洲 １ー２ー２７', async () => {
  const res = await normalize('東京都江東区豊洲 １ー２ー２７')
  expect(res).toStrictEqual({ "pref": "東京都", "city": "江東区", "town": "豊洲一丁目", "addr": "2-27", "lat": 35.661813, "lng": 139.792044, "level": 3})
})

test('東京都町田市木曽東4丁目14-イ２２ ジオロニアマンション', async () => {
  const res = await normalize('東京都町田市木曽東四丁目１４ーイ２２ ジオロニアマンション')
  expect(res).toStrictEqual({"pref": "東京都", "city": "町田市", "town": "木曽東四丁目", "addr": "14-イ22 ジオロニアマンション", "lat": 35.564817, "lng": 139.429661, "level": 3})
})

test('東京都町田市木曽東4丁目14-Ａ２２ ジオロニアマンション', async () => {
  const res = await normalize('東京都町田市木曽東四丁目１４ーＡ２２ ジオロニアマンション')
  expect(res).toStrictEqual({"pref": "東京都", "city": "町田市", "town": "木曽東四丁目", "addr": "14-A22 ジオロニアマンション", "lat": 35.564817, "lng": 139.429661, "level": 3})
})

test('東京都町田市木曽東4丁目一四━Ａ二二 ジオロニアマンション', async () => {
  const res = await normalize('東京都町田市木曽東四丁目一四━Ａ二二 ジオロニアマンション')
  expect(res).toStrictEqual({"pref": "東京都", "city": "町田市", "town": "木曽東四丁目", "addr": "14-A22 ジオロニアマンション", "lat": 35.564817, "lng": 139.429661, "level": 3})
})

test('東京都江東区豊洲 一丁目2-27', async () => {
  const res = await normalize('東京都江東区豊洲 一丁目2-27')
  expect(res).toStrictEqual({ "pref": "東京都", "city": "江東区", "town": "豊洲一丁目", "addr": "2-27", "lat": 35.661813, "lng": 139.792044, "level": 3})
})

test('東京都江東区豊洲 四-2-27', async () => {
  const res = await normalize('東京都江東区豊洲 四-2-27')
  expect(res).toStrictEqual({ "pref": "東京都", "city": "江東区", "town": "豊洲四丁目", "addr": "2-27", "lat": 35.653798, "lng": 139.800664, "level": 3})
})

test('石川県七尾市藤橋町亥45番地1', async () => {
  const res = await normalize('石川県七尾市藤橋町亥45番地1')
  expect(res).toStrictEqual({ "pref": "石川県", "city": "七尾市", "town": "藤橋町", "addr": "亥45-1", "lat": 37.041154, "lng": 136.941183, "level": 3})
})

test('石川県七尾市藤橋町亥四十五番地1', async () => {
  const res = await normalize('石川県七尾市藤橋町亥四十五番地1')
  expect(res).toStrictEqual({ "pref": "石川県", "city": "七尾市", "town": "藤橋町", "addr": "亥45-1", "lat": 37.041154, "lng": 136.941183, "level": 3})
})

test('石川県七尾市藤橋町 亥 四十五番地1', async () => {
  const res = await normalize('石川県七尾市藤橋町 亥 四十五番地1')
  expect(res).toStrictEqual({ "pref": "石川県", "city": "七尾市", "town": "藤橋町", "addr": "亥45-1", "lat": 37.041154, "lng": 136.941183, "level": 3})
})

test('石川県七尾市藤橋町 亥 45-1', async () => {
  const res = await normalize('石川県七尾市藤橋町 亥 45-1')
  expect(res).toStrictEqual({ "pref": "石川県", "city": "七尾市", "town": "藤橋町", "addr": "亥45-1", "lat": 37.041154, "lng": 136.941183, "level": 3})
})

test('和歌山県和歌山市 七番丁19', async () => {
  const res = await normalize('和歌山県和歌山市 七番丁 19')
  expect(res).toStrictEqual({ "pref": "和歌山県", "city": "和歌山市", "town": "七番丁", "addr": "19", "lat": 34.230447, "lng": 135.171994, "level": 3})
})

test('和歌山県和歌山市7番町19', async () => {
  const res = await normalize('和歌山県和歌山市7番町19')
  expect(res).toStrictEqual({ "pref": "和歌山県", "city": "和歌山市", "town": "七番丁", "addr": "19", "lat": 34.230447, "lng": 135.171994, "level": 3})
})

test('和歌山県和歌山市十二番丁45', async () => {
  const res = await normalize('和歌山県和歌山市十二番丁45')
  expect(res).toStrictEqual({ "pref": "和歌山県", "city": "和歌山市", "town": "十二番丁", "addr": "45", "lat": 34.232035, "lng": 135.172088, "level": 3})
})

test('和歌山県和歌山市12番丁45', async () => {
  const res = await normalize('和歌山県和歌山市12番丁45')
  expect(res).toStrictEqual({ "pref": "和歌山県", "city": "和歌山市", "town": "十二番丁", "addr": "45", "lat": 34.232035, "lng": 135.172088, "level": 3})
})

test('和歌山県和歌山市12-45', async () => {
  const res = await normalize('和歌山県和歌山市12-45')
  expect(res).toStrictEqual({ "pref": "和歌山県", "city": "和歌山市", "town": "十二番丁", "addr": "45", "lat": 34.232035, "lng": 135.172088, "level": 3})
})

test('兵庫県宝塚市東洋町1番1号', async () => {
  const res = await normalize('兵庫県宝塚市東洋町1番1号')
  expect(res).toStrictEqual({ "pref": "兵庫県", "city": "宝塚市", "town": "東洋町", "addr": "1-1", "lat": 34.797971, "lng": 135.363236, "level": 3})
})

test('兵庫県宝塚市東洋町1番1号', async () => {
  const res = await normalize('兵庫県宝塚市東洋町1番1号')
  expect(res).toStrictEqual({ "pref": "兵庫県", "city": "宝塚市", "town": "東洋町", "addr": "1-1", "lat": 34.797971, "lng": 135.363236, "level": 3})
})

test('北海道札幌市中央区北三条西３丁目１－５６マルゲンビル３Ｆ', async () => {
  const res = await normalize('北海道札幌市中央区北三条西３丁目１－５６マルゲンビル３Ｆ')
  expect(res).toStrictEqual({ "pref": "北海道", "city": "札幌市中央区", "town": "北三条西三丁目", "addr": "1-56マルゲンビル3F", "lat": 43.065075, "lng": 141.351683, "level": 3})
})

test('北海道札幌市北区北２４条西６丁目１−１', async () => {
  const res = await normalize('北海道札幌市北区北２４条西６丁目１−１')
  expect(res).toStrictEqual({ "pref": "北海道", "city": "札幌市北区", "town": "北二十四条西六丁目", "addr": "1-1", "lat": 43.090538, "lng": 141.340527, "level": 3})
})

test('堺市北区新金岡町4丁1−8', async () => {
  const res = await normalize('堺市北区新金岡町4丁1−8')
  expect(res).toStrictEqual({"pref": "大阪府", "city": "堺市北区", "town": "新金岡町四丁", "addr": "1-8", "lat": 34.568184, "lng": 135.519409, "level": 3})
})

test('串本町串本1234', async () => {
  const res = await normalize('串本町串本1234')
  expect(res).toStrictEqual({"pref": "和歌山県", "city": "東牟婁郡串本町", "town": "串本", "addr": "1234", "lat": 33.470358, "lng": 135.779952, "level": 3})
})

test('広島県府中市府川町315', async () => {
  const res = await normalize('広島県府中市府川町315')
  expect(res).toStrictEqual({"pref": "広島県", "city": "府中市", "town": "府川町", "addr": "315", "lat": 34.567649, "lng": 133.236891, "level": 3})
})

test('府中市府川町315', async () => {
  const res = await normalize('府中市府川町315')
  expect(res).toStrictEqual({"pref": "広島県", "city": "府中市", "town": "府川町", "addr": "315", "lat": 34.567649, "lng": 133.236891, "level": 3})
})

test('府中市宮西町2丁目24番地', async () => {
  const res = await normalize('府中市宮西町2丁目24番地')
  expect(res).toStrictEqual({"pref": "東京都", "city": "府中市", "town": "宮西町二丁目", "addr": "24", "lat": 35.669764, "lng": 139.477636, "level": 3})
})

test('三重県三重郡菰野町大字大強原2796', async () => {
  const res = await normalize('三重県三重郡菰野町大字大強原2796')
  expect(res).toStrictEqual({"pref": "三重県", "city": "三重郡菰野町", "town": "大字大強原", "addr": "2796", "lat": 35.028963, "lng": 136.530668, "level": 3})
})

test('三重県三重郡菰野町大強原2796', async () => {
  const res = await normalize('三重県三重郡菰野町大強原2796')
  expect(res).toStrictEqual({"pref": "三重県", "city": "三重郡菰野町", "town": "大字大強原", "addr": "2796", "lat": 35.028963, "lng": 136.530668, "level": 3})
})

test('福岡県北九州市小倉南区大字井手浦874', async () => {
  const res = await normalize('福岡県北九州市小倉南区大字井手浦874')
  expect(res).toStrictEqual({"pref": "福岡県", "city": "北九州市小倉南区", "town": "大字井手浦", "addr": "874", "lat": 33.77509, "lng": 130.893088, "level": 3})
})

test('福岡県北九州市小倉南区井手浦874', async () => {
  const res = await normalize('福岡県北九州市小倉南区井手浦874')
  expect(res).toStrictEqual({"pref": "福岡県", "city": "北九州市小倉南区", "town": "大字井手浦", "addr": "874", "lat": 33.77509, "lng": 130.893088, "level": 3})
})

test('沖縄県那覇市小禄１丁目５番２３号１丁目マンション３０１', async () => {
  const res = await normalize('沖縄県那覇市小禄１丁目５番２３号１丁目マンション３０１')
  expect(res).toStrictEqual({"pref": "沖縄県", "city": "那覇市", "town": "小禄一丁目", "addr": "5-23 一丁目マンション301", "lat": 26.192719, "lng": 127.679409, "level": 3})
})

test('香川県仲多度郡まんのう町勝浦字家六２０９４番地１', async () => {
  const res = await normalize('香川県仲多度郡まんのう町勝浦字家六２０９４番地１')
  expect(res).toStrictEqual({"pref": "香川県", "city": "仲多度郡まんのう町", "town": "勝浦", "addr": "家六2094-1", "lat": 34.097457, "lng": 133.97318, "level": 3})
})

test('香川県仲多度郡まんのう町勝浦家六２０９４番地１', async () => {
  const res = await normalize('香川県仲多度郡まんのう町勝浦家六２０９４番地１')
  expect(res).toStrictEqual({"pref": "香川県", "city": "仲多度郡まんのう町", "town": "勝浦", "addr": "家六2094-1", "lat": 34.097457, "lng": 133.97318, "level": 3})
})

test('愛知県あま市西今宿梶村一３８番地４', async () => {
  const res = await normalize('愛知県あま市西今宿梶村一３８番地４')
  expect(res).toStrictEqual({"pref": "愛知県", "city": "あま市", "town": "西今宿", "addr": "梶村一38-4", "lat": 35.2002, "lng": 136.831606, "level": 3})
})

test('香川県丸亀市原田町字東三分一１９２６番地１', async () => {
  const res = await normalize('香川県丸亀市原田町字東三分一１９２６番地１')
  expect(res).toStrictEqual({"pref": "香川県", "city": "丸亀市", "town": "原田町", "addr": "東三分一1926-1", "lat": 34.258954, "lng": 133.78778, "level": 3})
})

test('串本町串本千二百三十四 (都道府県無し, 郡無し)', async () => {
  const res = await normalize('串本町串本千二百三十四')
  expect(res).toStrictEqual({"pref": "和歌山県", "city": "東牟婁郡串本町", "town": "串本", "addr": "1234", "lat": 33.470358, "lng": 135.779952, "level": 3})
})

test('せたな町北檜山区北檜山１９３ (都道府県無し, 郡無し)', async () => {
  const res = await normalize('せたな町北檜山区北檜山１９３')
  expect(res).toStrictEqual({"pref": "北海道", "city": "久遠郡せたな町", "town": "北檜山区北檜山", "addr": "193", "lat": 42.414, "lng": 139.881784, "level": 3})
})

test('岩手県花巻市十二丁目７０４', async () => {
  const res = await normalize('岩手県花巻市十二丁目７０４')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "花巻市", "town": "十二丁目", "addr": "704", "lat": 39.358268, "lng": 141.122331, "level": 3})
})

test('岩手県花巻市12丁目７０４', async () => {
  const res = await normalize('岩手県花巻市12丁目７０４')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "花巻市", "town": "十二丁目", "addr": "704", "lat": 39.358268, "lng": 141.122331, "level": 3})
})

test('岩手県花巻市１２丁目７０４', async () => {
  const res = await normalize('岩手県花巻市１２丁目７０４')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "花巻市", "town": "十二丁目", "addr": "704", "lat": 39.358268, "lng": 141.122331, "level": 3})
})

test('京都府京都市中京区河原町二条下ル一之船入町537-50', async () => {
  const res = await normalize('京都府京都市中京区河原町二条下ル一之船入町537-50')
  expect(res).toStrictEqual({"pref": "京都府", "city": "京都市中京区", "town": "一之船入町", "addr": "537-50", "level": 3, "lat": 35.01217, "lng": 135.769483})
})

test('京都府宇治市莵道森本8−10', async () => {
  const res = await normalize('京都府宇治市莵道森本8−10')
  expect(res).toStrictEqual({"pref": "京都府", "city": "宇治市", "town": "莵道", "addr": "森本8-10", "level": 3, "lat": 34.904244, "lng": 135.827041})
})

test('京都府京都市中京区河原町二条下ル一之舟入町537-50（船と舟のゆらぎ）', async () => {
  const res = await normalize('京都府京都市中京区河原町二条下ル一之船入町537-50')
  expect(res).toStrictEqual({"pref": "京都府", "city": "京都市中京区", "town": "一之船入町", "addr": "537-50", "level": 3, "lat": 35.01217, "lng": 135.769483})
})

test('京都府宇治市莵道森本8−10（莵と菟のゆらぎ）', async () => {
  const res = await normalize('京都府宇治市菟道森本8−10')
  expect(res).toStrictEqual({"pref": "京都府", "city": "宇治市", "town": "莵道", "addr": "森本8-10", "level": 3, "lat": 34.904244, "lng": 135.827041})
})
  
// 「都道府県」の文字列を省略した場合
test('岩手花巻市１２丁目７０４', async () => {
  const res = await normalize('岩手花巻市１２丁目７０４')
  expect(res).toStrictEqual({"pref": "岩手県", "city": "花巻市", "town": "十二丁目", "addr": "704", "lat": 39.358268, "lng": 141.122331, "level": 3})
})
