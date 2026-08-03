(function () {
    const SHARED_WORD_BANK = {
        "美食佳肴": [
            {
                "left": "火锅",
                "right": "冒菜",
                "clue": "一种食物",
                "clueLength": "2"
            },
            {
                "left": "馒头",
                "right": "包子",
                "clue": "一种主食",
                "clueLength": "2"
            },
            {
                "left": "拿铁",
                "right": "卡布",
                "clue": "一种饮品",
                "clueLength": "2"
            },
            {
                "left": "汉堡",
                "right": "薯条",
                "clue": "一种快餐",
                "clueLength": "2"
            },
            {
                "left": "西瓜",
                "right": "甜瓜",
                "clue": "一种水果",
                "clueLength": "2"
            },
            {
                "left": "荔枝",
                "right": "龙眼",
                "clue": "一种水果",
                "clueLength": "2"
            },
            {
                "left": "螺蛳粉",
                "right": "酸辣粉",
                "clue": "一种面食",
                "clueLength": "3"
            },
            {
                "left": "鸭脖",
                "right": "鸡爪",
                "clue": "一种熟食",
                "clueLength": "2"
            },
            {
                "left": "烤肉",
                "right": "炸鸡",
                "clue": "一种荤菜",
                "clueLength": "2"
            },
            {
                "left": "披萨",
                "right": "意面",
                "clue": "意式料理",
                "clueLength": "2"
            },
            {
                "left": "奶茶",
                "right": "果汁",
                "clue": "一种饮品",
                "clueLength": "2"
            },
            {
                "left": "龙虾",
                "right": "螃蟹",
                "clue": "一种海鲜",
                "clueLength": "2"
            },
            {
                "left": "韭菜",
                "right": "芹菜",
                "clue": "一种蔬菜",
                "clueLength": "2"
            },
            {
                "left": "香蕉",
                "right": "芭蕉",
                "clue": "一种水果",
                "clueLength": "2"
            },
            {
                "left": "饼干",
                "right": "薯片",
                "clue": "一种零食",
                "clueLength": "2"
            },
            {
                "left": "红烧肉",
                "right": "锅包肉",
                "clue": "一种肉菜",
                "clueLength": "3"
            },
            {
                "left": "冰淇淋",
                "right": "圣代",
                "clue": "一种甜品",
                "clueLength": "3/2"
            },
            {
                "left": "麻辣烫",
                "right": "麻辣拌",
                "clue": "一种小吃",
                "clueLength": "3"
            },
            {
                "left": "担担面",
                "right": "热干面",
                "clue": "一种面食",
                "clueLength": "3"
            },
            {
                "left": "米线",
                "right": "粉丝",
                "clue": "一种面食",
                "clueLength": "2"
            },
            {
                "left": "豆浆",
                "right": "牛奶",
                "clue": "一种早餐饮品",
                "clueLength": "2"
            },
            {
                "left": "寿司",
                "right": "饭团",
                "clue": "一种和式食物",
                "clueLength": "2"
            },
            {
                "left": "咖啡",
                "right": "可乐",
                "clue": "一种深色饮品",
                "clueLength": "2"
            },
            {
                "left": "巧克力",
                "right": "棒棒糖",
                "clue": "一种甜食",
                "clueLength": "3"
            },
            {
                "left": "面条",
                "right": "馄饨",
                "clue": "一种传统面食",
                "clueLength": "2"
            },
            {
                "left": "包子",
                "right": "水饺",
                "clue": "一种食物",
                "clueLength": "2"
            },
            {
                "left": "汉堡",
                "right": "肉夹馍",
                "clue": "一种食物",
                "clueLength": "2/3"
            },
            {
                "left": "牛奶",
                "right": "豆浆",
                "clue": "一种食物",
                "clueLength": "2"
            },
            {
                "left": "葡萄",
                "right": "提子",
                "clue": "一种食物",
                "clueLength": "2"
            },
            {
                "left": "菠萝",
                "right": "凤梨",
                "clue": "一种食物",
                "clueLength": "2"
            },
            {
                "left": "烧烤",
                "right": "油炸",
                "clue": "一种食物",
                "clueLength": "2"
            },
            {
                "left": "咖啡",
                "right": "拿铁",
                "clue": "一种食物",
                "clueLength": "2"
            },
            {
                "left": "酸菜鱼",
                "right": "水煮鱼",
                "clue": "一种食物",
                "clueLength": "3"
            },
            {
                "left": "牛肉面",
                "right": "拉面",
                "clue": "一种食物",
                "clueLength": "3/2"
            },
            {
                "left": "拿铁",
                "right": "卡布奇诺",
                "clue": "一种食物",
                "clueLength": "2/4"
            }
        ],
        "数码科技": [
            {
                "left": "抖音",
                "right": "快手",
                "clue": "手机软件",
                "clueLength": "2"
            },
            {
                "left": "淘宝",
                "right": "京东",
                "clue": "手机软件",
                "clueLength": "2"
            },
            {
                "left": "百度",
                "right": "谷歌",
                "clue": "手机软件",
                "clueLength": "2"
            },
            {
                "left": "安卓",
                "right": "苹果",
                "clue": "手机",
                "clueLength": "2"
            },
            {
                "left": "键盘",
                "right": "鼠标",
                "clue": "电子产品",
                "clueLength": "2"
            },
            {
                "left": "华为",
                "right": "小米",
                "clue": "品牌",
                "clueLength": "2"
            },
            {
                "left": "手办",
                "right": "盲盒",
                "clue": "一种潮玩",
                "clueLength": "2"
            },
            {
                "left": "耳机",
                "right": "音箱",
                "clue": "电子产品",
                "clueLength": "2"
            },
            {
                "left": "平板",
                "right": "电脑",
                "clue": "电子产品",
                "clueLength": "2"
            },
            {
                "left": "投影",
                "right": "电视",
                "clue": "电子产品",
                "clueLength": "2"
            },
            {
                "left": "哔哩哔哩",
                "right": "小红书",
                "clue": "手机软件",
                "clueLength": "4/3"
            },
            {
                "left": "王者荣耀",
                "right": "和平精英",
                "clue": "手机软件",
                "clueLength": "4"
            },
            {
                "left": "快递",
                "right": "外卖",
                "clue": "生活服务",
                "clueLength": "2"
            },
            {
                "left": "单反",
                "right": "微单",
                "clue": "电子产品",
                "clueLength": "2"
            },
            {
                "left": "微信",
                "right": "QQ",
                "clue": "手机软件",
                "clueLength": "2"
            },
            {
                "left": "耳机",
                "right": "音响",
                "clue": "数码相关",
                "clueLength": "2"
            },
            {
                "left": "WIFI",
                "right": "热点",
                "clue": "手机功能",
                "clueLength": "4/2"
            },
            {
                "left": "固态硬盘",
                "right": "机械硬盘",
                "clue": "电脑相关",
                "clueLength": "4"
            },
            {
                "left": "中国移动",
                "right": "中国联通",
                "clue": "通讯品牌",
                "clueLength": "4"
            },
            {
                "left": "钉钉",
                "right": "飞书",
                "clue": "手机软件",
                "clueLength": "2"
            },
            {
                "left": "耳机",
                "right": "耳麦",
                "clue": "电子产品",
                "clueLength": "2"
            },
            {
                "left": "蓝牙",
                "right": "热点",
                "clue": "手机功能",
                "clueLength": "2"
            },
            {
                "left": "路由",
                "right": "光猫",
                "clue": "网络设备",
                "clueLength": "2"
            },
            {
                "left": "微博",
                "right": "知乎",
                "clue": "手机软件",
                "clueLength": "2"
            },
            {
                "left": "网盘",
                "right": "硬盘",
                "clue": "存东西的",
                "clueLength": "2"
            },
            {
                "left": "宽带",
                "right": "流量",
                "clue": "上网要用",
                "clueLength": "2"
            },
            {
                "left": "夸克",
                "right": "搜狗",
                "clue": "手机软件",
                "clueLength": "2"
            }
        ],
        "日常生活": [
            {
                "left": "牙刷",
                "right": "牙签",
                "clue": "日常用品",
                "clueLength": "2"
            },
            {
                "left": "雨伞",
                "right": "雨衣",
                "clue": "雨具",
                "clueLength": "2"
            },
            {
                "left": "闹钟",
                "right": "手表",
                "clue": "生活用品",
                "clueLength": "2"
            },
            {
                "left": "钥匙",
                "right": "门卡",
                "clue": "生活工具",
                "clueLength": "2"
            },
            {
                "left": "胶水",
                "right": "胶带",
                "clue": "文具用品",
                "clueLength": "2"
            },
            {
                "left": "纸巾",
                "right": "湿巾",
                "clue": "清洁用品",
                "clueLength": "2"
            },
            {
                "left": "花瓶",
                "right": "盆栽",
                "clue": "装饰物品",
                "clueLength": "2"
            },
            {
                "left": "电扇",
                "right": "空调",
                "clue": "降温设备",
                "clueLength": "2"
            },
            {
                "left": "电梯",
                "right": "楼梯",
                "clue": "公共设施",
                "clueLength": "2"
            },
            {
                "left": "袜子",
                "right": "手套",
                "clue": "服饰配件",
                "clueLength": "2"
            },
            {
                "left": "钢笔",
                "right": "圆珠笔",
                "clue": "文具用品",
                "clueLength": "2"
            },
            {
                "left": "抹布",
                "right": "毛巾",
                "clue": "清洁用品",
                "clueLength": "2"
            },
            {
                "left": "拖把",
                "right": "扫帚",
                "clue": "清扫工具",
                "clueLength": "2"
            },
            {
                "left": "梳子",
                "right": "刷子",
                "clue": "生活用品",
                "clueLength": "2"
            },
            {
                "left": "信封",
                "right": "明信片",
                "clue": "纸制用品",
                "clueLength": "2/3"
            },
            {
                "left": "被子",
                "right": "毯子",
                "clue": "床上用品",
                "clueLength": "2"
            },
            {
                "left": "秋裤",
                "right": "棉裤",
                "clue": "日常用品",
                "clueLength": "2"
            },
            {
                "left": "保安",
                "right": "保镖",
                "clue": "日常用品",
                "clueLength": "2"
            },
            {
                "left": "手电筒",
                "right": "闪光灯",
                "clue": "日常用品",
                "clueLength": "3"
            },
            {
                "left": "唇膏",
                "right": "口红",
                "clue": "日常用品",
                "clueLength": "2"
            },
            {
                "left": "枕头",
                "right": "抱枕",
                "clue": "日常用品",
                "clueLength": "2"
            },
            {
                "left": "公交",
                "right": "地铁",
                "clue": "日常用品",
                "clueLength": "2"
            },
            {
                "left": "牙刷",
                "right": "牙膏",
                "clue": "生活用品",
                "clueLength": "2"
            },
            {
                "left": "毛巾",
                "right": "浴巾",
                "clue": "生活用品",
                "clueLength": "2"
            },
            {
                "left": "拖鞋",
                "right": "凉鞋",
                "clue": "生活用品",
                "clueLength": "2"
            },
            {
                "left": "口红",
                "right": "唇膏",
                "clue": "生活用品",
                "clueLength": "2"
            },
            {
                "left": "门卡",
                "right": "钥匙",
                "clue": "出门会带",
                "clueLength": "2"
            },
            {
                "left": "桌子",
                "right": "椅子",
                "clue": "家里常见",
                "clueLength": "2"
            },
            {
                "left": "毛衣",
                "right": "卫衣",
                "clue": "身上穿的",
                "clueLength": "2"
            },
            {
                "left": "扫帚",
                "right": "拖把",
                "clue": "打扫卫生",
                "clueLength": "2"
            },
            {
                "left": "杯子",
                "right": "盘子",
                "clue": "吃饭会用",
                "clueLength": "2"
            },
            {
                "left": "台灯",
                "right": "吊灯",
                "clue": "照明用的",
                "clueLength": "2"
            }
        ],
        "职场风云": [
            {
                "left": "钉钉",
                "right": "飞书",
                "clue": "办公软件",
                "clueLength": "2"
            },
            {
                "left": "加班",
                "right": "团建",
                "clue": "公司活动",
                "clueLength": "2"
            },
            {
                "left": "老板",
                "right": "客户",
                "clue": "职场人物",
                "clueLength": "2"
            },
            {
                "left": "周报",
                "right": "总结",
                "clue": "职场文书",
                "clueLength": "2"
            },
            {
                "left": "面试",
                "right": "离职",
                "clue": "职场流程",
                "clueLength": "2"
            },
            {
                "left": "奖金",
                "right": "提成",
                "clue": "职场薪资",
                "clueLength": "2"
            },
            {
                "left": "名片",
                "right": "工牌",
                "clue": "职场物件",
                "clueLength": "2"
            },
            {
                "left": "公章",
                "right": "签字",
                "clue": "办公行为",
                "clueLength": "2"
            },
            {
                "left": "辞职",
                "right": "跳槽",
                "clue": "职场变动",
                "clueLength": "2"
            },
            {
                "left": "入职",
                "right": "试用",
                "clue": "职场阶段",
                "clueLength": "2"
            },
            {
                "left": "请假",
                "right": "调休",
                "clue": "工作安排",
                "clueLength": "2"
            },
            {
                "left": "周报",
                "right": "日报",
                "clue": "工作记录",
                "clueLength": "2"
            },
            {
                "left": "面试",
                "right": "复试",
                "clue": "找工作",
                "clueLength": "2"
            },
            {
                "left": "邮件",
                "right": "通知",
                "clue": "办公消息",
                "clueLength": "2"
            },
            {
                "left": "汇报",
                "right": "述职",
                "clue": "工作沟通",
                "clueLength": "2"
            },
            {
                "left": "入职",
                "right": "转正",
                "clue": "职场阶段",
                "clueLength": "2"
            },
            {
                "left": "离职",
                "right": "跳槽",
                "clue": "职场变动",
                "clueLength": "2"
            },
            {
                "left": "工位",
                "right": "前台",
                "clue": "办公区域",
                "clueLength": "2"
            },
            {
                "left": "合同",
                "right": "发票",
                "clue": "办公文件",
                "clueLength": "2"
            },
            {
                "left": "绩效",
                "right": "考核",
                "clue": "工作评价",
                "clueLength": "2"
            }
        ],
        "童年回忆": [
            {
                "left": "皮卡丘",
                "right": "喷火龙",
                "clue": "虚构生物",
                "clueLength": "3"
            },
            {
                "left": "大风车",
                "right": "动画城",
                "clue": "儿童节目",
                "clueLength": "3"
            },
            {
                "left": "孙悟空",
                "right": "哪吒",
                "clue": "神话人物",
                "clueLength": "3/2"
            },
            {
                "left": "葫芦娃",
                "right": "黑猫警长",
                "clue": "动画角色",
                "clueLength": "3/4"
            },
            {
                "left": "陀螺",
                "right": "溜溜球",
                "clue": "一种玩具",
                "clueLength": "2/3"
            },
            {
                "left": "风筝",
                "right": "秋千",
                "clue": "户外游戏",
                "clueLength": "2"
            },
            {
                "left": "西游记",
                "right": "封神榜",
                "clue": "经典文学",
                "clueLength": "3"
            },
            {
                "left": "班主任",
                "right": "教导主任",
                "clue": "学校人物",
                "clueLength": "3/4"
            },
            {
                "left": "暑假",
                "right": "寒假",
                "clue": "放假时间",
                "clueLength": "2"
            },
            {
                "left": "作业",
                "right": "考试",
                "clue": "学校任务",
                "clueLength": "2"
            },
            {
                "left": "铅笔",
                "right": "圆珠笔",
                "clue": "学习用品",
                "clueLength": "2/3"
            },
            {
                "left": "辣条",
                "right": "干脆面",
                "clue": "常见零食",
                "clueLength": "2/3"
            },
            {
                "left": "冰棍",
                "right": "雪糕",
                "clue": "冷饮",
                "clueLength": "2"
            },
            {
                "left": "魂斗罗",
                "right": "超级玛丽",
                "clue": "经典游戏",
                "clueLength": "3/4"
            },
            {
                "left": "跳绳",
                "right": "踢毽子",
                "clue": "课间活动",
                "clueLength": "2/3"
            },
            {
                "left": "秋千",
                "right": "滑梯",
                "clue": "游乐设施",
                "clueLength": "2"
            },
            {
                "left": "辣条",
                "right": "薯片",
                "clue": "常见零食",
                "clueLength": "2"
            },
            {
                "left": "积木",
                "right": "拼图",
                "clue": "小玩具",
                "clueLength": "2"
            },
            {
                "left": "跳绳",
                "right": "踢毽",
                "clue": "课间活动",
                "clueLength": "2"
            },
            {
                "left": "陀螺",
                "right": "弹珠",
                "clue": "小玩具",
                "clueLength": "2"
            },
            {
                "left": "校服",
                "right": "书包",
                "clue": "上学用品",
                "clueLength": "2"
            },
            {
                "left": "黑板",
                "right": "粉笔",
                "clue": "教室常见",
                "clueLength": "2"
            },
            {
                "left": "操场",
                "right": "教室",
                "clue": "学校场景",
                "clueLength": "2"
            },
            {
                "left": "试卷",
                "right": "作业",
                "clue": "学校任务",
                "clueLength": "2"
            },
            {
                "left": "雪糕",
                "right": "冰棍",
                "clue": "冷饮",
                "clueLength": "2"
            },
            {
                "left": "动画城",
                "right": "大风车",
                "clue": "电视节目",
                "clueLength": "3"
            },
            {
                "left": "口袋妖怪",
                "right": "数码宝贝",
                "clue": "童年动画",
                "clueLength": "4"
            }
        ],
        "运动竞技": [
            {
                "left": "足球",
                "right": "篮球",
                "clue": "球类运动",
                "clueLength": "2"
            },
            {
                "left": "跳水",
                "right": "游泳",
                "clue": "水上运动",
                "clueLength": "2"
            },
            {
                "left": "世界杯",
                "right": "奥运会",
                "clue": "体育赛事",
                "clueLength": "3"
            },
            {
                "left": "健身",
                "right": "跑步",
                "clue": "运动方式",
                "clueLength": "2"
            },
            {
                "left": "裁判",
                "right": "教练",
                "clue": "比赛人物",
                "clueLength": "2"
            },
            {
                "left": "乒乓球",
                "right": "羽毛球",
                "clue": "运动相关",
                "clueLength": "3"
            },
            {
                "left": "梅西",
                "right": "C罗",
                "clue": "运动相关",
                "clueLength": "2"
            },
            {
                "left": "詹姆斯",
                "right": "科比",
                "clue": "运动相关",
                "clueLength": "3/2"
            },
            {
                "left": "深蹲",
                "right": "俯卧撑",
                "clue": "运动相关",
                "clueLength": "2/3"
            },
            {
                "left": "排球",
                "right": "棒球",
                "clue": "球类运动",
                "clueLength": "2"
            },
            {
                "left": "跳高",
                "right": "跳远",
                "clue": "田径项目",
                "clueLength": "2"
            },
            {
                "left": "红牌",
                "right": "黄牌",
                "clue": "比赛判罚",
                "clueLength": "2"
            },
            {
                "left": "前锋",
                "right": "后卫",
                "clue": "场上位置",
                "clueLength": "2"
            },
            {
                "left": "主场",
                "right": "客场",
                "clue": "比赛场合",
                "clueLength": "2"
            },
            {
                "left": "单打",
                "right": "双打",
                "clue": "比赛形式",
                "clueLength": "2"
            },
            {
                "left": "拳击",
                "right": "散打",
                "clue": "对抗项目",
                "clueLength": "2"
            },
            {
                "left": "冠军",
                "right": "亚军",
                "clue": "比赛名次",
                "clueLength": "2"
            },
            {
                "left": "长跑",
                "right": "短跑",
                "clue": "田径项目",
                "clueLength": "2"
            }
        ],
        "大好河山": [
            {
                "left": "故宫",
                "right": "长城",
                "clue": "著名古迹",
                "clueLength": "2"
            },
            {
                "left": "杭州",
                "right": "苏州",
                "clue": "江南城市",
                "clueLength": "2"
            },
            {
                "left": "西藏",
                "right": "新疆",
                "clue": "国内边疆",
                "clueLength": "2"
            },
            {
                "left": "泰山",
                "right": "华山",
                "clue": "著名大山",
                "clueLength": "2"
            },
            {
                "left": "巴黎",
                "right": "伦敦",
                "clue": "欧洲城市",
                "clueLength": "2"
            },
            {
                "left": "洱海",
                "right": "滇池",
                "clue": "著名水域",
                "clueLength": "2"
            },
            {
                "left": "四川",
                "right": "重庆",
                "clue": "西南地区",
                "clueLength": "2"
            },
            {
                "left": "外滩",
                "right": "东方明珠",
                "clue": "城市地标",
                "clueLength": "2/4"
            },
            {
                "left": "黄山",
                "right": "庐山",
                "clue": "国内名山",
                "clueLength": "2"
            },
            {
                "left": "青岛",
                "right": "厦门",
                "clue": "海边城市",
                "clueLength": "2"
            },
            {
                "left": "香港",
                "right": "澳门",
                "clue": "国内地区",
                "clueLength": "2"
            },
            {
                "left": "三亚",
                "right": "丽江",
                "clue": "热门旅游地",
                "clueLength": "2"
            },
            {
                "left": "西湖",
                "right": "洱海",
                "clue": "风景名胜",
                "clueLength": "2"
            },
            {
                "left": "长江",
                "right": "黄河",
                "clue": "国内大河",
                "clueLength": "2"
            }
        ],
        "影视娱乐": [
            {
                "left": "周杰伦",
                "right": "陈奕迅",
                "clue": "华语歌手",
                "clueLength": "3"
            },
            {
                "left": "成龙",
                "right": "李连杰",
                "clue": "动作影星",
                "clueLength": "2/3"
            },
            {
                "left": "王菲",
                "right": "那英",
                "clue": "实力唱将",
                "clueLength": "2"
            },
            {
                "left": "选秀",
                "right": "晚会",
                "clue": "娱乐活动",
                "clueLength": "2"
            },
            {
                "left": "初恋",
                "right": "前任",
                "clue": "娱乐绯闻词",
                "clueLength": "2"
            },
            {
                "left": "粉丝",
                "right": "水军",
                "clue": "娱乐群体",
                "clueLength": "2"
            },
            {
                "left": "卧虎",
                "right": "藏龙",
                "clue": "武侠电影",
                "clueLength": "2"
            },
            {
                "left": "甄嬛传",
                "right": "如懿传",
                "clue": "电视剧",
                "clueLength": "3"
            },
            {
                "left": "成龙",
                "right": "李小龙",
                "clue": "男明星",
                "clueLength": "2/3"
            },
            {
                "left": "周杰伦",
                "right": "王力宏",
                "clue": "男歌手",
                "clueLength": "3"
            },
            {
                "left": "快乐大本营",
                "right": "天天向上",
                "clue": "综艺节目",
                "clueLength": "5/4"
            },
            {
                "left": "奥特曼",
                "right": "蜘蛛侠",
                "clue": "影视角色",
                "clueLength": "3"
            },
            {
                "left": "哈利波特",
                "right": "指环王",
                "clue": "奇幻作品",
                "clueLength": "4/3"
            },
            {
                "left": "若曦",
                "right": "晴川",
                "clue": "古装角色",
                "clueLength": "2"
            },
            {
                "left": "董永",
                "right": "许仙",
                "clue": "传说人物",
                "clueLength": "2"
            },
            {
                "left": "孟非",
                "right": "乐嘉",
                "clue": "节目人物",
                "clueLength": "2"
            },
            {
                "left": "郭德纲",
                "right": "于谦",
                "clue": "相声演员",
                "clueLength": "3/2"
            },
            {
                "left": "谢娜",
                "right": "李湘",
                "clue": "女主持",
                "clueLength": "2"
            },
            {
                "left": "战狼",
                "right": "红海行动",
                "clue": "动作电影",
                "clueLength": "2/4"
            },
            {
                "left": "泰坦尼克",
                "right": "阿凡达",
                "clue": "电影作品",
                "clueLength": "4/3"
            },
            {
                "left": "流浪地球",
                "right": "三体",
                "clue": "科幻作品",
                "clueLength": "4/2"
            },
            {
                "left": "西游降魔",
                "right": "大话西游",
                "clue": "西游电影",
                "clueLength": "4"
            },
            {
                "left": "卧虎藏龙",
                "right": "英雄",
                "clue": "武侠电影",
                "clueLength": "4/2"
            },
            {
                "left": "影帝",
                "right": "视帝",
                "clue": "男演员",
                "clueLength": "2"
            },
            {
                "left": "影后",
                "right": "视后",
                "clue": "女演员",
                "clueLength": "2"
            },
            {
                "left": "导演",
                "right": "编剧",
                "clue": "幕后人员",
                "clueLength": "2"
            },
            {
                "left": "歌手",
                "right": "演员",
                "clue": "演艺身份",
                "clueLength": "2"
            },
            {
                "left": "综艺",
                "right": "晚会",
                "clue": "节目类型",
                "clueLength": "2"
            },
            {
                "left": "追剧",
                "right": "追星",
                "clue": "娱乐行为",
                "clueLength": "2"
            },
            {
                "left": "票房",
                "right": "收视",
                "clue": "成绩数据",
                "clueLength": "2"
            },
            {
                "left": "预告",
                "right": "花絮",
                "clue": "影片相关",
                "clueLength": "2"
            },
            {
                "left": "港片",
                "right": "韩剧",
                "clue": "影视类型",
                "clueLength": "2"
            },
            {
                "left": "张艺谋",
                "right": "陈凯歌",
                "clue": "导演",
                "clueLength": "3"
            }
        ],
        "动物世界": [
            {
                "left": "哈士奇",
                "right": "萨摩耶",
                "clue": "一种犬类",
                "clueLength": "3"
            },
            {
                "left": "企鹅",
                "right": "熊猫",
                "clue": "只有两种颜色的动物",
                "clueLength": "2"
            },
            {
                "left": "大象",
                "right": "鲸鱼",
                "clue": "巨型动物",
                "clueLength": "2"
            },
            {
                "left": "老虎",
                "right": "狮子",
                "clue": "大型猫科",
                "clueLength": "2"
            },
            {
                "left": "苍蝇",
                "right": "蚊子",
                "clue": "害虫",
                "clueLength": "2"
            },
            {
                "left": "蝴蝶",
                "right": "蜻蜓",
                "clue": "飞行昆虫",
                "clueLength": "2"
            },
            {
                "left": "蚂蚁",
                "right": "蜜蜂",
                "clue": "社会性昆虫",
                "clueLength": "2"
            },
            {
                "left": "蛇",
                "right": "蜥蜴",
                "clue": "爬行动物",
                "clueLength": "1/2"
            },
            {
                "left": "海豚",
                "right": "海豹",
                "clue": "海里动物",
                "clueLength": "2"
            },
            {
                "left": "猎豹",
                "right": "花豹",
                "clue": "猫科动物",
                "clueLength": "2"
            },
            {
                "left": "绵羊",
                "right": "山羊",
                "clue": "常见家畜",
                "clueLength": "2"
            },
            {
                "left": "松鼠",
                "right": "仓鼠",
                "clue": "小型动物",
                "clueLength": "2"
            },
            {
                "left": "鸵鸟",
                "right": "孔雀",
                "clue": "鸟类",
                "clueLength": "2"
            },
            {
                "left": "熊猫",
                "right": "考拉",
                "clue": "可爱动物",
                "clueLength": "2"
            },
            {
                "left": "鲸鱼",
                "right": "鲨鱼",
                "clue": "海里动物",
                "clueLength": "2"
            }
        ],
        "文学经典": [
            {
                "left": "成语",
                "right": "诗词",
                "clue": "传统文学形式",
                "clueLength": "2"
            },
            {
                "left": "三国",
                "right": "水浒",
                "clue": "名著简写",
                "clueLength": "2"
            },
            {
                "left": "李白",
                "right": "杜甫",
                "clue": "著名诗人",
                "clueLength": "2"
            },
            {
                "left": "论语",
                "right": "孟子",
                "clue": "儒家经典",
                "clueLength": "2"
            },
            {
                "left": "小说",
                "right": "散文",
                "clue": "文学体裁",
                "clueLength": "2"
            },
            {
                "left": "武侠",
                "right": "言情",
                "clue": "文学风格",
                "clueLength": "2"
            },
            {
                "left": "三国演义",
                "right": "水浒传",
                "clue": "古典名著",
                "clueLength": "4/3"
            },
            {
                "left": "唐诗",
                "right": "宋词",
                "clue": "古典文学",
                "clueLength": "2"
            },
            {
                "left": "成语",
                "right": "俗语",
                "clue": "常见说法",
                "clueLength": "2"
            },
            {
                "left": "散文",
                "right": "随笔",
                "clue": "文章体裁",
                "clueLength": "2"
            },
            {
                "left": "鲁迅",
                "right": "老舍",
                "clue": "作家",
                "clueLength": "2"
            },
            {
                "left": "红楼梦",
                "right": "西游记",
                "clue": "古典名著",
                "clueLength": "3"
            },
            {
                "left": "诗人",
                "right": "词人",
                "clue": "文学身份",
                "clueLength": "2"
            },
            {
                "left": "史记",
                "right": "汉书",
                "clue": "古代史书",
                "clueLength": "2"
            }
        ],
        "自然科学": [
            {
                "left": "地震",
                "right": "海啸",
                "clue": "地质灾害",
                "clueLength": "2"
            },
            {
                "left": "太阳",
                "right": "月亮",
                "clue": "天文星体",
                "clueLength": "2"
            },
            {
                "left": "氧气",
                "right": "氮气",
                "clue": "常见气体",
                "clueLength": "2"
            },
            {
                "left": "沙漠",
                "right": "雨林",
                "clue": "极端环境",
                "clueLength": "2"
            },
            {
                "left": "重力",
                "right": "摩擦",
                "clue": "物理现象",
                "clueLength": "2"
            },
            {
                "left": "电流",
                "right": "电压",
                "clue": "电学名词",
                "clueLength": "2"
            },
            {
                "left": "进化",
                "right": "变异",
                "clue": "生物学名词",
                "clueLength": "2"
            },
            {
                "left": "火山",
                "right": "冰川",
                "clue": "自然景观",
                "clueLength": "2"
            },
            {
                "left": "彗星",
                "right": "流星",
                "clue": "天上会见到",
                "clueLength": "2"
            },
            {
                "left": "日食",
                "right": "月食",
                "clue": "天文现象",
                "clueLength": "2"
            },
            {
                "left": "气压",
                "right": "气温",
                "clue": "天气数据",
                "clueLength": "2"
            },
            {
                "left": "细胞",
                "right": "基因",
                "clue": "生物知识",
                "clueLength": "2"
            },
            {
                "left": "声波",
                "right": "光波",
                "clue": "物理概念",
                "clueLength": "2"
            },
            {
                "left": "分子",
                "right": "原子",
                "clue": "微观概念",
                "clueLength": "2"
            },
            {
                "left": "卫星",
                "right": "行星",
                "clue": "天上东西",
                "clueLength": "2"
            },
            {
                "left": "显微镜",
                "right": "望远镜",
                "clue": "观察工具",
                "clueLength": "3"
            },
            {
                "left": "洋流",
                "right": "季风",
                "clue": "自然现象",
                "clueLength": "2"
            },
            {
                "left": "热带",
                "right": "寒带",
                "clue": "气候区域",
                "clueLength": "2"
            },
            {
                "left": "潮汐",
                "right": "海浪",
                "clue": "海边现象",
                "clueLength": "2"
            }
        ]
    };

    window.PARTY_GAME_SHARED_WORD_BANK = SHARED_WORD_BANK;
})();
