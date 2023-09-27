import { MonsterData } from "./type";
// {
//   label: "",
//   key: "",
//   info: {
//     poetry: "",
//     img: "/journal/",
//     desc: "",
//   },
// },

/** 妖王数据 */
export const KING_DATA: MonsterData[] = [
  { label: "黑熊精", key: "heixiongjing" },
  {
    label: "凌虚子",
    key: "lingxuzi",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/d6bd5e029245d6884ba6b495e2c27d1ed21b2418.jpg",
    },
  },
  { label: "赤髯龙", key: "chiranlong" },
  { label: "虎先锋", key: "huxianfeng" },
  { label: "小骊龙", key: "xiaolilong" },
  { label: "石先锋", key: "shixianfeng" },
  {
    label: "亢金龙",
    key: "kangjinlong",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/2c9b14fc5266d016a7b89819d12bd40735fa351b.jpg",
    },
  },
  {
    label: "毒敌大王",
    key: "dudidawang",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/954abbd9bc3eb13560b5dd89e01ea8d3fd1f4457.jpg",
    },
  },
  {
    label: "晦月魔君",
    key: "huiyuemojun",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/658f99c69f3df8dcb652e5a38b11728b47102852.jpg",
    },
  },
  { label: "增长天王", key: "zengzhangtianwang" },
  { label: "广目天王", key: "guangmutianwang" },
  { label: "持国天王", key: "chiguotianwang" },
  { label: "多闻天王", key: "duowentianwang" },
  { label: "石敢当", key: "shigandang" },
  { label: "黄眉大王", key: "huangmeidawang" },
];

/** 头目数据 */
export const RINGLEADER_DATA: MonsterData[] = [
  {
    label: "刀狼教头",
    key: "daolangjiaotou",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/8c651e305c6034a83f77b2b08d1349540923762f.jpg",
    },
  },
  { label: "耳听怒", key: "ertingnu" },
  {
    label: "眼看喜",
    key: "yankanxi",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/2f698ff4e0fe9925e299636172a85edf8db1712f.jpg",
    },
  },
  {
    label: "身本忧",
    key: "shenbenyou",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/685e701a0ef41bd50bf7eec517da81cb39db3d18.jpg",
    },
  },
  { label: "舌尝思", key: "shechangsi" },
  { label: "意见欲", key: "yijianyu" },
  { label: "鼻嗅爱", key: "bixiuai" },
  { label: "无影手", key: "wuyingshou" },
  { label: "靡道人", key: "midaoren" },
  { label: "僧面", key: "sengmian" },
  { label: "巨灵神", key: "julingshen" },
  { label: "百足虫", key: "baizuchong" },
  {
    label: "赤尻马猴",
    key: "chikaomahou",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/c16a8a35349b033b410bf6eb53ce36d3d439bdc5.jpg",
    },
  },
  {
    label: "双头鼠",
    key: "shuangtoushu",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/7519872cd42a28341000303a1db5c9ea15cebf1a.jpg",
    },
  },
  { label: "石中人", key: "shizhongren" },
  {
    label: "蓝采",
    key: "lancai",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/3d74969a033b5bb5ee7126cf70d3d539b600bc1a.jpg",
    },
  },
  { label: "犰狳精", key: "qiuyujing" },
  { label: "石母", key: "shimu" },
  { label: "武僧", key: "wuseng" },
];

/** 小妖数据 */
export const GOBLIN_DATA: MonsterData[] = [
  {
    label: "小呱呱",
    key: "xiaoguagua",
    info: {
      poetry: "眼瞪爱取闹，耳鸣性聒噪。\n形秽躯肉腥，夭亡作炭爆。",
      img: "/journal/xiaoguagua.jpg",
      desc: "昔日，有两只虾蟆一起在沼泽里修炼。小虾蟆经常被别人欺负，大虾蟆总替他出头。一来二去，他们很快就成了好友。一日，波里个浪想在虾蟆中挑一只做妖校，大家都想争取这个机会。一番比较下来，强壮的大虾蟆，和机警的小虾蟆成了最终的候选者。众虾蟆虽不服气，但都不敢声张。\n\n这日，大、小虾蟆负责执守波里个浪的洞府，有个琥珀杯无故碎了，查不出何人所为。众虾蟆不依不挠，聒聒躁躁，非要他俩负责。大虾蟆争吵不过，便与他们大打出手，众虾蟆便说他是恼羞成怒，肯定是他打碎的。小虾蟆站在一旁，缄口不言，大虾蟆就责怪他不为自己辩解，进而怀疑起小虾蟆。\n\n小虾蟆犹豫片刻，承认琥珀杯正是自己打碎的。众虾蟆却不买账，说他们一个蓄意胡为，一个玩忽职守，都要偿命。小虾蟆越听越急，忍不住也和他们吵起来。他们吵得越来越大声，肚子鼓得越来越高，忽然，有几个的肚皮被撑破，炸裂开来。血肉溅了众妖满头满脸，最后没一个干净的。",
    },
  },
  {
    label: "蜻蜓精",
    key: "qingtingjing",
    info: {
      poetry:
        "穿花度柳放暗箭，奋翅鼓翼乘歪风。\n好行小慧难成善，三三两两阻道中。",
      img: "/journal/qingtingjing.jpg",
      desc: "蜻蜓精很爱射箭，母亲发现他有这项才华，便托了关系，将他送去妖王处学艺。\n\n在妖王看来，蜻蜓精是个异常优秀的徒弟。他每日除了勤勉地完成练习，还十分恭敬地服侍师父，随叫随到。有时他明明在殿外射箭，但师父嘴上一提，他就立刻出现在了跟前。师父本有些怀疑，但想他有双灵便的翅膀，行动如风，似乎也合情理，便没再深究。\n\n这日，师父教他如何在箭上蓄更多的妖力，叮嘱道：“只待箭头耀光，正是射出之时。”那蜻蜓精满口答应记住了，可当师父下午考察时，他却懵然无知。师父暗想，许是他未曾学会，又细细教了他一遍。待次日再问，他又不明白了。\n\n这般情况越来越多，妖王动了大怒，要惩罚蜻蜓精。蜻蜓精心下害怕，赶紧跪地求饶，道：“师父息怒。我有几位同胞兄弟，平日里，大家轮番学习和休息，所以各自都只学了一点，这才答不上来。”言罢，妖王就见拉拉杂杂跑出来数十个蜻蜓精，长得俱是一般摸样，全都跪在那里，不停磕头。妖王见此哭笑不得，将他们贬作巡山小妖，再也不教他们本事了。\n\n咦，小聪明初时总显得周全完美，招来称赞和嘉许，其实暗中却埋下了隐患，待露陷之时，非但遭人嘲笑，还会惹祸上身哩。",
    },
  },
  {
    label: "青冉冉",
    key: "qingranran",
    info: {
      poetry: "林深青冉冉，全无俗尘沾。\n连枝常相衬，道心坚似磐。",
      img: "/journal/qingranran.jpg",
      desc: "昔年，有个富家子为访道求仙，抛离了家业，躲入山中修行。因他自小由仆从伺候，不擅家事，独自生活让他吃尽了苦头。这日，他浣衣用的木盆顺水漂走了，他便坐在河边嚎啕起来，忽听树头沙沙作响，抬眼一看，竟有个年轻貌美的女子，足踏枝叶，飘摇而来。\n\n那女子落在他跟前，问明缘由，安慰道：“我是这林间柏树成精，听你如此好道，心下感动，便助你一二罢。”于是，女子时常帮他准备饭食，浆洗缝补。每次她来，从不多言，绝不多留。可即便如此，富家子的心中还是生了别的念想，对女子道：“你既然愿意照顾我，何不与我双修，我们作对林间道侣，也好阴阳调和。”\n\n那女子勃然大怒，严词拒绝：“我与你修的是不同法门，况且我已有千年道行，岂会因你透漏真元？”言罢，匆匆离去。富家子多次去河边哭求，这才得到原谅，但不上半年，他又旧事重提，痴人说梦起来。\n\n女子思索一番，道：“你未曾见过我的原貌，谈何作道侣呢？你先随我来吧。”\n\n女子将富家子带入深林，但见群木之中，有棵巨大的柏树，树皮窊皱，沟壑森然。那女子飞上树梢就不见了。旋即古木发出长啸，拔地而起。它轻捻法诀，唤出周围几丛矮树，大家丫丫叉叉，比比划划，要教训那富家子。富家子吓得抱头鼠窜，急忙收拾行李，逃回家中去了。",
    },
  },
  {
    label: "蛇司药",
    key: "shesiyao",
    info: {
      poetry: "松竹梅兰色，豺狼虎豹心。\n采药穷山用，全无济世情。",
      img: "/journal/shesiyao.jpg",
      desc: "旧时，紫云山下有座道观。这日，有个苦修的道姑来此借宿，因她远走四方，风尘仆仆，观中的女冠们体恤她，便为她备好热水，让她沐浴更衣。\n\n正是梳洗之时，道姑忽闻梁上传来响动。她毫不声张，披衣出浴，顺势拿起拂尘轻轻一甩，那拂尘应风而长，盘盘绕绕，竟从梁上捉下来个妖怪。\n\n听得屋中声响，观中女冠们急忙来看，就见地上伏着个青色鳞片的蛇妖，那妖被捉也不急慌，想是偷看惯了的，众女冠都吃过他的亏，相继来骂他。那蛇妖满脸不屑，两颊一鼓，从嘴里喷出些绿稠毒液，四下飞溅。但凡沾到些些而的，立时倒在地上，痛苦难当。\n\n见此怪毫无悔改之意，道姑寄出一根飘忽的金针，要将其打灭。这蛇妖这才怕了，赶紧求饶道：“我乃是山中炼药的小妖，屋外药篓里正有解毒之物，但求仙姑饶命。”\n\n那道姑听他如此恳切，便给他个机会。他从药篓中翻出白色小丸递与道姑验看：“此乃树珍珠，是株树之叶，凡间少见，可解百毒。”他给众女冠每人喂下一颗，她们立刻就好了。\n\n此后，观中不知缘何。常备有树珍珠。世有中毒者多来此观求救，只是树珍珠一颗千金，大多人都买不起，只能等死罢了。",
    },
  },
  {
    label: "傀蛛士",
    key: "kuizhushi",
    info: {
      poetry:
        "糟鼻子，歪俫口，獠牙尖利毒浊稠。\n查耳朵，砍额头，面生八目相貌丑。",
      img: "/journal/kuizhushi.jpg",
      desc: "昔年，有个樵夫住在深山之中。某次他下山赶集，观赏了傀儡戏，十分喜欢，便一直惦记着，想寻个机会再看一次。\n\n这日，他在山中砍柴，突闻得欢呼喝彩之声，便寻声而去。瞧见有群妖怪正围在一起，好不热闹。那樵夫虽是害怕，但耐不住好奇，就攀上块岩石，远远眺望。原是那群妖怪，围着空地在看杂耍表演。樵夫站得太远，看不真切，只能认出有个身着红衣的妖怪，正舞着两柄尖刀，旋转翻腾，非常精彩。\n\n樵夫情不自禁朝着那边走近了些，又见那翻腾的妖怪的背上，反绑着几条腿足，足上悬着些丝线，他一眼便认出那是傀儡的戏法，赶紧选了棵大树爬上去，要在近前观看。\n\n那怪相貌滑稽丑陋，樵夫只觉这表演比那集会中的鲍老戏还诙谐，看得如痴如醉。忽觉脖上一凉，樵夫伸手摸去，是些绿色的口涎，他赶紧抬头看去，正对上几只盯着他的眼睛。原是那树顶上，吊着个藕荷色的大蜘蛛，它的腿上连着许多丝线，牵牵扯扯，带动着远处的那只妖怪。\n\n樵夫怪叫一声，跌下树去。大蜘蛛顿时停下，看戏的妖怪们也纷纷回望过来，都死死盯着樵夫。樵夫吓得急忙逃命，回去后一病不起。他吃了许多药也无济于事，没过多久就病死了。",
    },
  },
  {
    label: "拂尘道士",
    key: "fuchendaoshi",
    info: {
      poetry:
        "宽袍鹤氅两袖风，有道无道何须问？\n颂德咏功扰清梦，拂尘掸土乱虚空。",
      img: "/journal/fuchendaoshi.jpg",
      desc: "落花庄中有个道士，拜师最晚，年纪最小，因此多得祖师关照，他也乐意时时孝敬祖师。祖师伸手，他就端茶，祖师抬脚，他就拖鞋。扑蝇打扇，叠被铺床，殷勤周到，祖师十分偏爱他。\n\n师兄们心中嫉妒，却拉不下脸面做谄媚的事，只能说长道短，排挤打压，以此宣泄。\n\n这日，祖师登台，考察众徒弟的学问。问到小徒弟时，祖师有意偏袒，便只让他背一段《道德经》来听。小徒弟满脸自信，声音嘹亮地背诵：“道，生一一，生二二，生三三，生万物……”\n\n师兄们翘首以盼这情形许久，今日终于得偿所愿，大笑不止，甚至偷眼斜睨，要看祖师羞臊的模样。祖师果然十分气恼，甩袖走了。众师兄又恐吓小徒弟道：“你十分无状，今日气到他，以后可别想再得到他的真传了。”\n\n其后一段时日，祖师对小徒弟避而不见，奈何身边竟无半个人能使唤周全，久而久之又念起他的好处来。没过几日，祖师就将小徒弟招来跟前伺候，可瞧见他那副心思全不在悟道上的模样，又觉嫌恶。一日，小徒弟恳求祖师传他门手艺，也不知是否在刻意嘲讽，祖师便将他日常扑蝇打扇之举，创成一套招式，教了他些御风的法术，草草了事了。",
    },
  },
  {
    label: "执杖道士",
    key: "zhizhangdaoshi",
    info: {
      poetry:
        "仙山云水连天涯，天涯望尽不见家。\n执杖远走入危巢，得享白雪与黄芽。",
      img: "/journal/zhizhangdaoshi.jpg",
      desc: "昔年，有个山村建在多虫的山岭之上，后因怪事频发，山民们纷纷搬走，这里便成了个荒村。却说山下的村里有个青年，母死家贫，父亲是个赖汉，对他很少管顾，村民们也都瞧不起他，时常欺辱，他自觉在村中难以为生，索性躲去岭上的荒村居住。\n\n那荒村被一伙虫妖所占，青年登上山岭，立时就被妖魔捉了去。他本无牵挂，存了求死的心，全无反抗之意。虫妖们见他这般，并不为难他，将他安顿在了一间破屋里。\n\n是夜，有个中年道人，带着衣裳饭食而来，对青年道：“我听闻你无处可去，便为你带了些起居可用之物，你若不嫌弃，就拜我为师。留在此间罢，我还能教你些养气之法。”那青年许久未被人关照，急急换了道袍，行了拜师之礼，从此便和虫妖们一起生活修炼。日则同行同坐，夜则同息同止。\n\n这日，有个书生闯入青年的房中，道：“我刚从妖怪的洞府里跑出来，他们把我封在虫茧中，不知是何打算。我正要逃离此地，见你是个活人，我们一起走罢。”那青年摇头道：“我在这里过得很好，为何要走？”那书生气愤道：“因为他们是妖怪，而你是个人。先不说他们日后是否会害你，且说你跟他们相处久了，也会变成个怪物。”\n\n“你说得对，”言罢，青年抄起身旁的长杖，将书生打翻在地，“可就算变成妖怪，我也心甘情愿。”那书生见青年执迷不悟，忍着伤痛翻出门外，独自一人逃命去了。",
    },
  },
  {
    label: "山匪头子",
    key: "shanfeitouzi",
    info: {
      poetry: "浮生多困窘，却尘皆寒穷。\n夙仇报不平，殊途道相同。",
      img: "/journal/shanfeitouzi.png",
      desc: "昔年，镇上有个青年乃是武行教头之子。因父亲嗜酒，醉后误事，进了大牢，只剩他与母亲两人相依为命。眼看家道日益艰难，青年为了养家糊口，什么杂活都肯做。村人知道了，都称赞他侍奉寡母，是个孝子。\n\n适逢荒年，母子二人去投奔亲戚，不想半路上却杀出一伙山匪。这些人鹰视狼顾脸上带疤，手舞大刀叉叉比划，不言其他，只管要钱。他们哪里有钱，只好磕头求饶。山匪哪里肯放，只管打杀。青年以为活不成了，便抢下大刀，眼一闭，心一横，竟斩了母亲向贼寇投诚。至此，他也落草，当起了山匪。事情传出去，人们又都骂他苟且偷生，是个孽子。\n\n几年过后，神秘的事情发生了。那伙山匪竟一夜之间被灭口。有人说，是来了个好汉除暴安良，替天行道。也有人说，是山里又生了妖怪，害了贼人的性命，报应不爽。大家争来吵去没个定论，慢慢将这事抛到脑后。直到这天，有人满身是血地从山里逃回来，说遇见一个高壮匪徒，非人非妖，持一口大刀拦路劫道，面相倒有几分像那孽子，嘴里却说要帮世人解脱。",
    },
  },
  {
    label: "狼护法",
    key: "langhufa",
    info: {
      poetry:
        "衲衣穿，书经念，烧香礼佛心虔虔。\n人模狼样博指点，忘却前尘度流年。",
      img: "/journal/langhufa.png",
      desc: "狼，富有血性，坚韧团结，不喜欢狼的人骂它们奸诈凶残，忘恩负义。狗，聪明乖巧，敏锐忠诚，依然有人骂它们行事卑贱，身份鄙薄。\n\n狼妖之中，也有一些异类。虽然灵虚子始终遵循原始的种族习性，大部分狼妖都跟着他生活在山场外围。但还有一部分武功出色的狼妖，被大王提拔成了护法，身着黄袍，守护后山的洞府，过上了不用餐风宿露的生活。\n\n一日在禅院宴饮，小妖们喝了些酒，便各自抱怨起来。看守山场的，抱怨巡山艰辛，日晒雨淋不说，时常还有危险。看守洞府的，又抱怨洞内环境虽好，却少有自由，时常要受闲气，腌h事也屡见不鲜。他们各自说着苦楚，羡慕对方的生活。\n\n咦，天下哪有占尽好处的美差!若看的都是别人的光鲜，听的都是自身的污秽，又如何享受当下快乐呢?",
    },
  },
  {
    label: "小人参精",
    key: "xiaorenshenjing",
    info: {
      poetry:
        "灵苗赋异禀，自启出泥土。\n须髯作手足，根身分肩股。\n安神强精魄，滋养入虚补。\n准采三两根，贪多必受苦。",
      img: "/journal/xiaorenshenjing.png",
      desc: "古籍载，长服人参可延年益寿，所以世人多爱吃人参，尤其是老参。曾有学者不以为然，认为人参半毒半补，只因生来便是人形，才被如此青睐。但无论如何，采参为生者，始终大有人在。\n\n深谷之中的人参小辈，尤其害怕听到一种足音。这声音乃是采参人特制的山履，踏在老林子落满厚厚积叶泥石上时，发出的甚为恶心可怖的脚步声。声音每每一响，小人参的兄弟姐妹们就会逐个消失。独剩他们，总因个头太小而躲过一劫。可即便如此，大部分的梢头仍被拴了一段红绳。采参人要压住它们，指不定哪日长成后，再来挖走。\n\n不觉时光飞逝，这日，又有熟悉的足音响起，掐指细算，大概是前人的曾孙辈了吧。那脚步轻快匆忙，想是已然瞧见了熟悉的红绳。可真是晦气!采参人摸到的这截红绳，竟拴于一副骸骨之上。他正要骂两声，背后却有泥土声响。只见一个巨大的精怪掘地而出，吓得他拔腿就跑，边跑还不忘大喊:“吃人啦!妖怪吃人啦!”",
    },
  },
  {
    label: "骨灵精",
    key: "gulingjing",
    info: {
      poetry: "垄头卧白骨，皮肉俱枯桑。\n游迷忘姓氏，何处是故乡?",
      desc: "黄风冷大风不止,朝夕吹刮,坟冢被神风摧毁，尸骨裸露在外,此乃常事。\n\n这日,有个外来的商人,身负要事，急需穿过山岭。乡民们都说岭中妖魔横行，凶险万分,没人愿意给他带路。商人只好独自过山,才走了半日，就精疲力竭,颓丧地坐在道旁歌脚。",
      img: "/journal/gulingjing.jpg",
    },
  },
  {
    label: "骨悚然",
    key: "gusongran",
    info: {
      poetry: "人情无寒暑，世道不识途。\n枪头凝盛气，盾后冷傲骨。",
      desc: '定风庄的大巫们，都是骄傲的战士。他们总爱拿着画有虎神的盾牌，舞着月牙形的长枪，呼呼喝喝，吓退鬼怪。尤其在送葬时，他们敲击着盾牌,走在最前方,自称开路将军。\n\n大巫们享有较高的地位，就连小妖们也时时赏上山珍野味,以保平安,不被驱逐。\n\n这日,有庄民发现山中多了不少妖怪，便去找大巫商量，大巫们不屑地说：“妖怪和我们住在一个山间，难免撞见彼此，他们既然上赏作保，那就饶过他们罢。"\n\n又过了几年，山中忽而刮起怪风，吹续不断，原本安分的众妖也纷纷猖狂起来常常生事。大巫们穿戴整齐，举着盾牌，直冲庄外，与闹事的妖怪们战作一团。\n\n可妖怪们居然不惧怕他们，大巫们一向引以为豪的长枪盾牌，只能阻退几个小妖，很快就被围困了起来。为首的红袍鼠妖奸笑到：“因为菩萨在山中修行，所以先前特意给了你们几分薄面。你们区区凡人，该不会真以为自己有本事打妖怪吧？”庄民见大巫们根本无法退敌，反引得群妖惶怒，急急锁了庄门，要求大巫退散鬼怪后再回来。这些大巫最后战死在了山中，现在仍保持着打斗的姿态，四处寻人晦气哩。',
      img: "/journal/gusongran.png",
    },
  },
  {
    label: "石磷磷",
    key: "shilinlin",
    info: {
      poetry: "奇人赐道行，石头作伴当。\n磐磐性烈刚，招之把命丧。",
      img: "/journal/shilinlin.png",
      desc: "从前有个爱捏酸的文人，非常中意自己收藏的镇纸，每当家中会客，必要拿出来显摆。客人们都说，这镇纸石材普通，着实看不出有什么稀奇。文人听后，只好讲出了一段奇特的往事。\n\n文人年轻时酷爱游历。一次他赶路十分辛苦，便寻了块大石靠着休息，不觉就睡了过去。酣睡间，他忽觉石头动了动，于是赶紧睁开眼。只见那石头上坑坑洼洼现出许多骷髅，而后奋力站了起来，石下生出双腿，和活人无甚差别。他心中骇然，知道此石不善，便拼命逃走。不知跑了多远，来到一个荒僻山谷，远远瞧见有个干瘦和尚，正盘腿于层岩之上打坐。文人大感诡异，转身又想跑，可身后的石精却追了上来。眼看就要遭殃，那和尚端坐的岩石竟站了起来，比之追来的石精还多出两条手臂，唯唯几下,便将前者砸得稀烂。俱我,正是它们打架时留下的残块。\n\n客人们听后纷纷大笑，嘲弄文人以梦为真，杜撰了个故事唬人。文人很不服气，但被笑久了，他也开始怀疑起真假，渐渐地便不爱看那镇纸了。又过了一段时间，他将镇纸束之高阁，再也没拿出来过。",
    },
  },
  {
    label: "石双双",
    key: "sss",
  },
  {
    label: "石苍苍",
    key: "scc",
  },
  {
    label: "狼侍卫",
    key: "langshiwei",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/38b542ff9925bc3103c80ba918df8db1cb13702f.jpg",
    },
  },
  {
    label: "灵芝精",
    key: "lingzhijing",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/ac526afdc3cec3fd609aa1449088d43f87942718.jpg",
    },
  },
  {
    label: "鼠精",
    key: "shujing",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/c75bacf51bd5ad6e7a5d62dbc7cb39dbb6fd3c18.jpg",
    },
  },
  {
    label: "蛤蟆精",
    key: "hamajing",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/460359f3b21193139ab5f58123380cd790238dca.jpg",
    },
  },
  {
    label: "香客",
    key: "xiangke",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/8a7d5addd100baa15888418a0110b912c8fc2e18.jpg",
    },
  },
  {
    label: "盲僧甲",
    key: "mangseng_01",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/87057489d43f8794055b4e1f941b0ef41bd53a18.jpg",
    },
  },
  {
    label: "盲僧乙",
    key: "mangseng_02",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/e9433044d688d43f270d97c33b1ed21b0ef43b18.jpg",
    },
  },
  {
    label: "盲僧丙",
    key: "mangseng_03",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/87057489d43f8794055b4e1f941b0ef41bd53a18.jpg",
    },
  },
  {
    label: "盲僧丁",
    key: "mangseng_04",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/5c14ab22dd54564efaf0ee08f5de9c82d1584f2f.jpg",
    },
  },
  {
    label: "空性",
    key: "kongxing",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/8a7d5addd100baa15888418a0110b912c8fc2e18.jpg",
    },
  },
  { label: "鬼侍卫", key: "guishiwei" },
  { label: "犀将军", key: "xijiangjun" },
  { label: "犀牛", key: "xiniu" },
  { label: "天兵甲", key: "tianbing1" },
  { label: "天兵乙", key: "tianbing2" },
  { label: "天将", key: "tianjiang" },
  { label: "怪鸟", key: "guainiao" },
  {
    label: "村民",
    key: "cunmin",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/c44911df9c82d15893c92180c60a19d8bc3e427d.jpg",
    },
  },
  {
    label: "乱齿兽",
    key: "luanchishou",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/f5be3b24bc315c606b851edecbb1cb13495477b4.jpg",
    },
  },
  {
    label: "太平轮",
    key: "taipinglun",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/7667c0d1f703918f532e37fb173d269758eec4c2.jpg",
    },
  },
  { label: "沙岭海", key: "shalinghai" },
  {
    label: "硕鼠",
    key: "shuoshu",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/7519872cd42a28341000303a1db5c9ea15cebf1a.jpg",
    },
  },
  { label: "和尚", key: "heshang" },
  {
    label: "胖头陀",
    key: "pangtoutuo",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/c14797fbe6cd7b892bcd3cb2492442a7d9330e1b.jpg",
    },
  },
  {
    label: "魔像",
    key: "moxiang",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/be58352ad40735fa55514888d8510fb30f24081b.jpg",
    },
  },
  {
    label: "四将甲",
    key: "sijiang1",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/6ec93c500fb30f24fa3bea328e95d143ad4b031b.jpg",
    },
  },
  {
    label: "四将乙",
    key: "sijiang2",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/8b11adb20f2442a760affb949743ad4bd113021b.jpg",
    },
  },
  {
    label: "金刚像",
    key: "jingangxiang",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/a3bdf067d01609240484a42a920735fae6cd341b.jpg",
    },
  },
  {
    label: "石像兽",
    key: "shixiangshou",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/f38dd9889e510fb3b8b871a69f33c895d1430c1b.jpg",
    },
  },
  {
    label: "烂佛陀",
    key: "lanfotuo",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/948b9bdab6fd52667d8a3a25ed18972bd407361b.jpg",
    },
  },
  {
    label: "佛陀",
    key: "buddha",
    info: {
      img: "https://imgsa.baidu.com/forum/pic/item/167bf9b4c9ea15ce2b6dea38f0003af33b87b2c5.jpg",
    },
  },
  { label: "小菌君", key: "xiaojunjun" },
  { label: "蜘蛛精", key: "zhizhujing" },
  { label: "黄花怪甲", key: "huanghuaguai1" },
  { label: "黄花怪乙", key: "huanghuaguai2" },
  { label: "蜥蜴怪甲", key: "xiyiguai1" },
  { label: "蜥蜴怪乙", key: "xiyiguai2" },
  { label: "牛头", key: "niutou" },
  { label: "马面", key: "mamian" },
  { label: "红眼", key: "hongyan" },
  { label: "老鼠精", key: "laoshujing" },
  { label: "背手和尚", key: "beishouheshang" },
  { label: "扇子怪", key: "shanziguai" },
  { label: "青狮精", key: "qingshijing" },
  { label: "龙王", key: "longwang" },
  { label: "青色巨人", key: "qingsejuren" },
  { label: "蛇巡司", key: "shexunsi" },
  { label: "甲虫怪", key: "jiachongguai" },
];

export const DATA = [
  {
    label: `妖王（${KING_DATA.length}）`,
    key: "King",
    children: KING_DATA,
  },
  {
    label: `头目（${RINGLEADER_DATA.length}）`,
    key: "Ringleader",
    children: RINGLEADER_DATA,
  },
  {
    label: `小妖（${GOBLIN_DATA.length}）`,
    key: "Goblin",
    children: GOBLIN_DATA,
  },
];
