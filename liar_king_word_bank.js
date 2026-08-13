(function () {
    const LIAR_KING_WORD_BANK = {
        "传统器物": [
            { word: "压襟", explanation: "古代挂在衣襟上用于装饰并压住衣服的小饰物" },
            { word: "妆奁", explanation: "古代女子存放梳妆用品的盒匣" },
            { word: "笏板", explanation: "古代官员上朝时手持的狭长板子" },
            { word: "帐钩", explanation: "用来挂起帐帘或帷幔的钩状器物" },
            { word: "熏笼", explanation: "古人用来熏香、烘衣或取暖的笼形器具" },
            { word: "臂搁", explanation: "写字作画时垫在手臂下的长条文具" },
            { word: "水丞", explanation: "文房中用来盛水以供研墨的小器皿" },
            { word: "觚", explanation: "古代用于饮酒或礼仪的高身青铜器" },
            { word: "觯", explanation: "古代盛酒或饮酒用的礼器" },
            { word: "攒盒", explanation: "由多个小格拼成、用来盛放点心果品的盒子" }
        ],
        "民俗节庆": [
            { word: "跳傩", explanation: "戴面具驱邪祈福的古老民俗仪式" },
            { word: "社火", explanation: "节庆时进行的民间巡游和表演活动" },
            { word: "送穷", explanation: "旧俗中在特定日子送走穷气、祈求富足的仪式" },
            { word: "走百病", explanation: "元宵前后外出游走以祈求健康的习俗" },
            { word: "烧塔", explanation: "中秋或节庆时堆塔点火祈福的民俗活动" },
            { word: "打春", explanation: "立春时鞭打春牛以象征劝农迎春的习俗" },
            { word: "祭灶", explanation: "腊月祭拜灶神、祈求来年平安的习俗" },
            { word: "抢孤", explanation: "中元节相关的爬棚竞抢祭品活动" },
            { word: "抬阁", explanation: "节庆巡游中由人抬着高台展示人物造型的表演" },
            { word: "踩岁", explanation: "除夕夜踩碎芝麻秆等物以取吉祥谐音的习俗" }
        ],
        "非遗手作": [
            { word: "缂丝", explanation: "用通经断纬方法织出图案的传统丝织工艺" },
            { word: "点翠", explanation: "把翠鸟羽毛贴嵌在金属饰件上的传统工艺" },
            { word: "锔瓷", explanation: "用金属锔钉修补破裂瓷器的手艺" },
            { word: "绒花", explanation: "用蚕丝或绒线扎制成花形饰物的传统工艺" },
            { word: "泥金", explanation: "把金粉调和后用于书画或器物装饰的技法" },
            { word: "螺钿", explanation: "把贝壳薄片嵌入器物表面形成纹饰的工艺" },
            { word: "剔红", explanation: "在厚漆层上雕刻纹样的漆器工艺" },
            { word: "掐丝", explanation: "用细金属丝勾勒纹样轮廓的装饰工艺" },
            { word: "拓片", explanation: "把碑刻或器物纹样拓印到纸上的成品" },
            { word: "髹漆", explanation: "在器物表面反复涂漆并加工装饰的工艺" }
        ],
        "戏曲舞台": [
            { word: "砌末", explanation: "戏曲舞台上使用的道具统称" },
            { word: "髯口", explanation: "戏曲演员挂戴的假胡须" },
            { word: "水袖", explanation: "戏曲服装袖口延长的白色绸袖" },
            { word: "检场", explanation: "戏曲演出中在台上整理道具和辅助表演的人" },
            { word: "叫板", explanation: "戏曲中演员开唱前用念白或动作引出伴奏的程式" },
            { word: "亮相", explanation: "戏曲演员在关键瞬间停顿定格展示身段的动作" },
            { word: "桌围", explanation: "戏曲舞台上围在桌子周围的装饰布" },
            { word: "出将", explanation: "传统戏台上演员上场所经过的一侧门" },
            { word: "入相", explanation: "传统戏台上演员下场所经过的一侧门" },
            { word: "趟马", explanation: "戏曲中用身段表现骑马行进的表演程式" }
        ],
        "建筑园林": [
            { word: "雀替", explanation: "古建筑梁柱交接处的装饰性承托构件" },
            { word: "藻井", explanation: "传统建筑天花中央向上凹入的装饰结构" },
            { word: "铺首", explanation: "门上衔环的兽面形金属构件" },
            { word: "瓦当", explanation: "屋檐筒瓦前端带纹饰的遮挡构件" },
            { word: "影壁", explanation: "院门内外用于遮挡视线的墙体" },
            { word: "垂花门", explanation: "四合院中连接内外院、带垂莲柱装饰的门" },
            { word: "抱鼓石", explanation: "传统宅门两侧形似鼓的石质构件" },
            { word: "月洞门", explanation: "园林中圆形或近圆形的门洞" },
            { word: "勾栏", explanation: "古代栏杆，也可指瓦舍中的表演场所" },
            { word: "斗拱", explanation: "中国古建筑中位于柱梁之间的层叠承托结构" }
        ],
        "圈层黑话": [
            { word: "谷子", explanation: "二次元圈里对徽章、立牌、卡片等周边商品的称呼" },
            { word: "无料", explanation: "粉丝活动中免费发放的小卡、贴纸等应援物" },
            { word: "柄图", explanation: "周边商品上使用的角色或作品图案" },
            { word: "流麻", explanation: "内部带流沙效果的亚克力周边" },
            { word: "痛包", explanation: "挂满某个角色徽章、挂件等周边的包" },
            { word: "吧唧", explanation: "二次元圈对徽章类周边的常见称呼" },
            { word: "娃衣", explanation: "给玩偶或棉花娃娃穿的小衣服" },
            { word: "制品", explanation: "同人或周边圈中已经做成实物的商品" },
            { word: "烫门", explanation: "圈内热度很高、竞争激烈的作品或角色" },
            { word: "妈咪", explanation: "圈内对创作者或产出者的亲昵称呼" }
        ],
        "行业术语": [
            { word: "封样", explanation: "把确认后的样品封存作为后续生产验收标准" },
            { word: "走版", explanation: "印刷或排版中版面位置发生偏移的问题" },
            { word: "压线", explanation: "在纸品上压出折叠线以便成型的工序" },
            { word: "拼版", explanation: "把多个页面或图案排到同一印刷版上的操作" },
            { word: "菲林", explanation: "传统制版中用于输出图文的胶片" },
            { word: "蓝纸", explanation: "印刷前用于检查版式和内容的打样稿" }
        ],
        "自然生物": [
            { word: "鸡枞菌", explanation: "常与白蚁巢相关、味道鲜美的野生食用菌" },
            { word: "树舌", explanation: "长在树干上的硬质层孔菌" },
            { word: "地衣", explanation: "真菌和藻类共生形成的复合生物" },
            { word: "乌饭树", explanation: "叶子可用来染制乌米饭的植物" },
            { word: "佛手螺", explanation: "外形像手指、附着在岩石上的海洋甲壳动物" },
            { word: "鬼笔菌", explanation: "成熟时散发异味、形态特殊的真菌" },
            { word: "海苹果", explanation: "色彩鲜艳、形似苹果的海参类动物" },
            { word: "石龙子", explanation: "身体光滑、四肢较短的一类蜥蜴" },
            { word: "水熊虫", explanation: "能在极端环境中存活的微小缓步动物" },
            { word: "鹅掌楸", explanation: "叶片形似鹅掌或马褂的落叶乔木" }
        ],
        "地域饮食": [
            { word: "擂茶", explanation: "把茶叶、芝麻、花生等擂碎冲泡成的地方饮品" },
            { word: "糟卤", explanation: "用酒糟香味调成、用于浸泡食材的卤汁" },
            { word: "炊饼", explanation: "古代对蒸制面食的一种称呼" },
            { word: "米皮", explanation: "用米浆蒸制后切成条片的地方小吃" },
            { word: "浆水面", explanation: "用发酵酸浆水调味的西北面食" },
            { word: "钵仔糕", explanation: "盛在小碗中蒸制的广东甜点" },
            { word: "油茶面", explanation: "炒熟面粉加油脂坚果后冲泡食用的食品" },
            { word: "酸嘢", explanation: "广西等地用酸甜汁腌制水果蔬菜的小吃" },
            { word: "卷筒粉", explanation: "米浆蒸成薄皮后卷入馅料的地方小吃" }
        ],
        "古代制度": [
            { word: "里坊", explanation: "古代城市中按坊里划分的居住管理区域" },
            { word: "保甲", explanation: "古代基层户籍和治安连坐管理制度" },
            { word: "驿传", explanation: "古代传递公文和接待官员的交通通信制度" },
            { word: "市舶司", explanation: "古代管理海外贸易和海关事务的机构" },
            { word: "漕运", explanation: "通过水路把粮食等物资运往京师或指定地区的制度" },
            { word: "榷场", explanation: "古代边境地区设立的官方贸易市场" },
            { word: "盐引", explanation: "古代商人经营食盐所需的官方凭证" },
            { word: "牙行", explanation: "旧时居间买卖并收取佣金的商业机构" },
            { word: "铺递", explanation: "古代基层传递文书和差役往来的驿递系统" }
        ],
        "文玩收藏": [
            { word: "开片", explanation: "瓷器釉面自然或人为形成的细裂纹" },
            { word: "皮壳", explanation: "器物表面经岁月形成的外层质感" },
            { word: "沁色", explanation: "玉石等器物长期埋藏后形成的颜色变化" },
            { word: "朱砂供", explanation: "文玩因长期接触朱砂或供奉环境形成的红色痕迹" },
            { word: "老蜡", explanation: "年代较久、表面质感成熟的蜜蜡或蜡质饰物" },
            { word: "蛤蜊光", explanation: "老纸张或书画表面呈现的贝壳般光泽" },
            { word: "火漆印", explanation: "用熔化封蜡盖章形成的封缄印记" },
            { word: "压手杯", explanation: "握在手中有分量感、适合把玩的杯形器" },
            { word: "供石", explanation: "用于案头陈设和赏玩的天然奇石" }
        ],
        "医学药材": [
            { word: "阿胶珠", explanation: "阿胶经炒制成珠状后的中药炮制品" },
            { word: "浮小麦", explanation: "干瘪轻浮的小麦，常作中药使用" },
            { word: "海螵蛸", explanation: "乌贼内壳入药后的名称" },
            { word: "瓦楞子", explanation: "蚶类贝壳入药后的名称" },
            { word: "鸡内金", explanation: "鸡砂囊内壁干燥后制成的中药" },
            { word: "乌梅炭", explanation: "乌梅炒炭后形成的中药炮制品" },
            { word: "灯心草", explanation: "灯心草茎髓入药后的名称" },
            { word: "地骨皮", explanation: "枸杞根皮入药后的名称" },
            { word: "桑螵蛸", explanation: "螳螂卵鞘入药后的名称" },
            { word: "夜交藤", explanation: "何首乌藤茎入药后的名称" }
        ],
        "天文地理": [
            { word: "黄道光", explanation: "太阳附近由行星际尘埃散射阳光形成的微弱光带" },
            { word: "晕轮", explanation: "日月周围因冰晶折射形成的光环现象" },
            { word: "日珥", explanation: "太阳边缘喷出的巨大炽热气体结构" },
            { word: "极光椭圆", explanation: "极区周围容易出现极光的环状区域" },
            { word: "潮汐锁定", explanation: "天体自转周期与公转周期同步的状态" },
            { word: "风蚀蘑菇", explanation: "岩石下部被风沙磨蚀后形成的蘑菇状地貌" },
            { word: "冰碛湖", explanation: "冰川搬运堆积物阻塞后形成的湖泊" },
            { word: "雅丹", explanation: "干旱地区由风蚀形成的垄岗状地貌" },
            { word: "壶穴", explanation: "流水携带砾石旋磨河床形成的圆形坑穴" },
            { word: "丹霞", explanation: "红色砂砾岩经侵蚀形成的陡崖峰丘地貌" }
        ],
        "航海军事": [
            { word: "艏楼", explanation: "船只前部高起的甲板建筑" },
            { word: "舷窗", explanation: "船舶侧面开设的圆形或小型窗户" },
            { word: "压载水", explanation: "船舶为保持稳定而注入舱内的水" },
            { word: "绞盘", explanation: "用来缠绕绳索并牵引重物的机械装置" },
            { word: "桅杆", explanation: "船上用来支撑帆、索具或信号设备的高杆" },
            { word: "火门", explanation: "旧式火器或炉膛中用于点火、通火的开口" },
            { word: "拒马", explanation: "用来阻挡骑兵或车辆的移动障碍物" },
            { word: "辎重", explanation: "军队行军作战时携带的物资装备" },
            { word: "哨卡", explanation: "设岗警戒或检查的地点" },
            { word: "浮桥", explanation: "用船只或浮体架设在水面上的临时桥梁" }
        ],
        "古籍文书": [
            { word: "鱼尾", explanation: "古籍版心中形似鱼尾的折页标记" },
            { word: "版心", explanation: "古籍书页中间靠折缝处记录书名页码等信息的位置" },
            { word: "朱批", explanation: "用红笔写在奏折或文书上的批示" },
            { word: "夹注", explanation: "夹在正文之间的小字注释" },
            { word: "骑缝", explanation: "跨在两页或两联接缝处的印记或文字" },
            { word: "花押", explanation: "古人用于签署文件的特殊符号或草签" },
            { word: "钤印", explanation: "在书画文书上盖印章的动作或印记" },
            { word: "套印", explanation: "用多块版或多次印刷叠加形成文字图案的技术" },
            { word: "校勘", explanation: "比对不同版本文字并订正讹误的工作" },
            { word: "抄本", explanation: "由人工抄写而成的书籍或文献文本" }
        ]
    };

    window.LIAR_KING_WORD_BANK = LIAR_KING_WORD_BANK;
})();
