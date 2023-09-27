import { SpellsTreeNode, SpellsTypeEnum } from "./type";

export const SPELLS_ITEMS: SpellsTreeNode[] = [
  {
    label: "奇术",
    children: [
      {
        name: "安身法",
        key: "anshenfa",
        cost: 60,
        coolDown: 90,
        type: SpellsTypeEnum.Active,
        description:
          "天命人在天寒地冻之地，机缘巧合习得的保命奇术，只需取棍就地划一道圈子，便可御寒歇息，整备御敌。\n站在圈内，可持续增长棍势，并加速恢复气力；若此时温酒饮下，更有奇效。\n\n火圈存续时限较长，即便步出阵势打斗片刻，也可随时折返阵内，再寻机会。\n时限一到，阵势自然幻灭。",
        icon: "/spells/anshenfa.png",
        iconType: "dark",
        video: "/spells/anshenfa.mp4",
      },
      {
        name: "定身法",
        key: "dingshenfa",
        cost: 60,
        coolDown: 30,
        type: SpellsTypeEnum.Active,
        description:
          "天命人的掌中，被写上了一个金色“定”字后，径直习得的摆布奇术。\n只需将手一指，心念咒诀，便可将对手定在原地，动弹不得。\n\n神通广大，法力强盛的对手，能更快解开定身的禁锢，须得小心。\n若是打斗正酣，对手出招凶顽，也难将其长久定住，讨不到许多好处。\n\n兴许能寻个对手站定、倒下或被打退的无力之际，才是施展此法的绝妙之时。",
        icon: "/spells/dingshenfa.png",
        video: "/spells/dingshenfa.mp4",
      },
    ],
  },
  {
    label: "身法",
    children: [
      {
        name: "聚形散气",
        key: "juxingsanqi",
        cost: 30,
        coolDown: 35,
        type: SpellsTypeEnum.Active,
        description:
          "天命人收归妖魔精气，自然参悟的移动身法。\n掐诀念咒后，留下假身，自己迅速散作清气遁走，身轻脚健，来去如烟。\n即可避开对手的锋芒，也可诱敌聚拢，见机周旋。\n\n待再聚形时，可飞脚突袭，可蓄力一击。对手若无防备，或能打他个措手不及。\n散气脱身，便已回本；反击得手，赚到几分。",
        icon: "/spells/juxingsanqi.png",
        iconType: "dark",
        video: "/spells/juxingsanqi.mp4",
      },
      {
        name: "铜头铁臂",
        key: "tongtoutiebi",
        cost: 30,
        coolDown: 10,
        type: SpellsTypeEnum.Active,
        description:
          "天命人遭遇奇险奇遇，融会贯通的防守身法。\n耸肩挺背，化作一块金石，若对手恰好打在石上，转震得虎口生疼。\n此时若对手反被震开，措手不及，正是上前追击的绝佳机会。\n\n此术看似愚钝，却最须瞧准时机使出方能奏效。早了晚了，都不好使。\n有些对手雄壮勇悍，他们势大力沉的杀招，甚至能击溃铜头铁臂。",
        icon: "/spells/tongtoutiebi.png",
        video: "/spells/tongtoutiebi.mp4",
      },
    ],
  },
  {
    label: "毫毛",
    children: [
      {
        name: "身外身法",
        key: "shenwaishenfa",
        cost: 130,
        coolDown: 60,
        type: SpellsTypeEnum.Active,
        description:
          "天命人使用身上毫毛施展的法术。\n拔一把毫毛，丢在口中嚼碎，望空中喷去，即变做数个毛猴。\n这些毛猴，眼乖会跳，能打能逃，就如天明人一般。\n\n见对手欺主，他们自会上去与之周旋，可乘机喘息一二，也可遁走离去。\n只是毛猴性命并不牢固，被强大威猛的对手争锋相对，有被迅速打灭之险。",
        icon: "/spells/shenwaishenfa.png",
        video: "/spells/shenwaishenfa.mp4",
      },
    ],
  },
  {
    label: "变身",
    children: [
      {
        name: "赤潮",
        key: "chichao",
        type: SpellsTypeEnum.Active,
        description:
          "使用后，变身化作狼妖，自身辟火。\n火浪三分，灼灼逼人。攻击能赋予火焚灾劫。\n\n招式赋予火焚灾劫，能持续灼伤对手。\n变身期间，进入辟火状态。\n\n偃月（轻击）\n轻击招式，将刀上火焰舞得如满月一般，持续劈砍对手。\n\n赶月（重击）\n重击招式，身轻如火，流星追月。\n不同方向闪避后再紧接重击，能演化出新的变招。\n\n破月（被动能力）闪避后短时间内，攻击力大幅提升。",
        icon: "/spells/chichao.png",
        video: "/spells/chichao.mp4",
      },
    ],
  },
];
