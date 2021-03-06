var meridians = [{
        id: "fei",
        name: "手少阴肺经 11穴",
        pic: "fei.gif",
        cols: [5, 4, 2],
        acupoint: ["中府", "云门", "天府", "侠白", "尺泽", "孔最", "列缺", "经渠", "太渊", "鱼际", "少商"]
    },
    {
        id: "daChang",
        name: "手阳明大肠经 20穴",
        pic: "daChang.gif",
        cols: [5, 5, 5, 5],
        acupoint: ["商阳", "二间", "三间", "合谷", "阳溪", "偏历", "温溜", "下廉", "上廉", "手三里", "曲池", "肘髎", "五里", "臂臑", "肩髃", "巨骨", "天鼎", "扶突", "口合髎", "迎香"]
    },
    {
        id: "wei",
        name: "足阳明胃经 45穴",
        pic: "wei.gif",
        cols: [5, 3, 5, 5, 6, 6, 5, 5, 5],
        acupoint: ["承泣", "四白", "巨髎", "地仓", "大迎", "颊车", "下关", "头维", "人迎", "水突", "气舍", "缺盆", "气户", "库房", "屋翳", "膺窗", "乳中", "乳根", "不容", "承满", "梁门", "关门", "太乙", "滑肉门", "天枢", "外陵", "大巨", "水道", "归来", "气冲", "髀关", "伏兔", "阴市", "梁丘", "犊鼻", "足三里", "上巨虚", "条口", "下巨虚", "丰隆", "解溪", "冲阳", "陷谷", "内庭", "厉兑"]
    },
    {
        id: "pi",
        name: "足太阴脾经 21穴",
        pic: "pi.gif",
        cols: [5, 4, 2, 5, 5],
        acupoint: ["隐白", "大都", "太白", "公孙", "商丘", "三阴交", "漏谷", "地机", "阴陵泉", "血海", "箕门", "冲门", "府舍", "腹结", "大横", "腹哀", "食窦", "天溪", "胸乡", "周荣", "大包"]
    },
    {
        id: "xin",
        name: "手少阴心经 9穴",
        pic: "xin.gif",
        cols: [3, 4, 2],
        acupoint: ["极泉", "青灵", "少海", "灵道", "通里", "阴郄", "神门", "少府", "少冲"]
    },
    {
        id: "xiaoChang",
        name: "手太阳小肠经 19穴",
        pic: "xiaoChang.gif",
        cols: [5, 3, 5, 2, 4],
        acupoint: ["少泽", "前谷", "后溪", "腕骨", "阳谷", "养老", "支正", "小海", "肩贞", "臑兪", "天宗", "秉风", "曲垣", "肩外兪", "肩中兪", "天窗", "天容", "颧髎", "听宫"]
    },
    {
        id: "pangGuan",
        name: "足太阳膀胱经 67穴",
        pic: "pangGuan.gif",
        cols: [5, 5, 2, 5, 5, 5, 5, 2, 6, 5, 5, 4, 5, 5, 3],
        acupoint: ["睛明", "攒竹", "眉冲", "曲差", "五处", "承光", "通天", "络却", "玉枕", "天柱", "大杼", "风门", "肺兪", "厥阴兪", "心兪", "督兪", "膈兪", "肝兪", "胆兪", "脾兪", "胃兪", "三焦兪", "肾兪", "气海兪", "大肠兪", "关元兪", "小肠兪", "膀胱兪", "中膂兪", "白环兪", "上髎", "次髎", "中髎", "下髎", "会阳", "承扶", "殷门", "浮郄", "委阳", "委中", "附分", "魄户", "膏肓", "神堂", "譩譆", "膈关", "魂门", "阳纲", "意舍", "胃仓", "肓门", "志室", "胞肓", "秩边", "合阳", "承筋", "承山", "飞扬", "跗阳", "昆仑", "仆参", "申脉", "金门", "京骨", "束骨", "通谷", "至阴"]
    },
    {
        id: "shen",
        name: "足少阴肾经 27穴",
        pic: "shen.gif",
        cols: [5, 5, 5, 5, 2],
        acupoint: ["涌泉", "然谷", "太溪", "大钟", "水泉", "照海", "复溜", "交信", "筑宾", "阴谷", "横骨", "大赫", "气穴", "四满 ", "中注", "肓兪", "商曲", "石关", "阴都", "通谷", "幽门", "步廊", "神封", "灵墟", "神藏", "彧中", "兪府"]
    },
    {
        id: "xinBao",
        name: "手厥阴心包经 9穴",
        pic: "xinBao.gif",
        cols: [3, 4, 2],
        acupoint: ["天池", "天泉", "曲泽", "郄门", "间使", "内关", "大陵", "劳宫", "中冲"]
    },
    {
        id: "sanJiao",
        name: "手少阳三焦经 23穴",
        pic: "sanJiao.jpeg",
        cols: [5, 5, 5, 5, 3],
        acupoint: ["关冲", "液门", "中渚", "阳池", "外关", "支沟", "会宗", "三阳络", "四渎", "天井", "清冷渊", "消泺", "臑会", "肩髎", "天髎", "天牗", "翳风", "瘛脉", "颅息", "角孙", "耳门", "禾髎", "丝竹空"]
    },
    {
        id: "dan",
        name: "足少阳胆经 44穴",
        cols: [5, 5, 5, 5, 5, 5, 5, 5, 4],
        pic: "dan.jpeg",
        acupoint: ["瞳子髎", "听会", "上关", "颔厌", "悬颅", "悬厘", "曲鬓", "率谷", "天冲", "浮白", "头窍阴", "完骨", "本神", "阳白", "头临泣", "目窗", "正营", "承灵", "脑空", "风池", "肩井", "渊腋", "辄筋", "日月", "京门", "带脉", "五枢", "维道", "居髎", "环跳", "风市", "中渎", "膝阳关", "阳陵泉", "阳交", "外丘", "光明", "阳辅", "悬钟", "丘墟", "足临泣", "地五会", "侠溪", "足窍阴"]
    },
    {
        id: "gang",
        name: "足厥阴肝经 14穴",
        cols: [5, 5, 4],
        pic: "gang.jpeg",
        acupoint: ["大墩", "行间", "太冲", "中封", "蠡沟", "中都", "膝关", "曲泉", "阴包", "足五里", "阴廉", "急脉", "章门", "期门"]
    },
    {
        id: "renMai",
        name: "任脉 24穴",
        cols: [5, 5, 5, 5, 4],
        pic: "renMai.jpeg",
        acupoint: ["会阴", "曲骨", "中极", "关元", "石门", "气海", "阴交", "神阙", "水分", "下腕", "建里", "中脘", "上腕", "巨阙", "鸠尾", "中庭", "膻中", "玉堂", "紫宫", "华盖", "璇玑", "天突", "廉泉", "承浆"]
    },
    {
        id: "duMai",
        name: "督脉 28穴",
        cols: [5, 5, 5, 5, 5, 3],
        pic: "duMai.jpeg",
        acupoint: ["长强", "腰兪", "腰阳关", "命门", "悬枢", "脊中", "中枢", "筋缩", "至阳", "灵台", "神道", "身柱", "陶道", "大椎", "哑门", "风府", "脑户", "强间", "后顶", "百会", "前顶", "囟会", "上星", "神庭", "素髎", "水沟", "兑端", "龈交"]
    }
];

var menu = document.getElementById("menu");
var acupoint = document.getElementById("acupoint");
var dictation = document.getElementById("dictation");
var dictationList = document.getElementById("dictationList");
var test = document.getElementById("test");
var hint = document.getElementById("hint");
var hintText = document.getElementById("hintText");
var order = document.getElementById("order");
var currentAcupointIndex = 0;
var currentList = "";

if (window.speechSynthesis) {
    var utter = new window.SpeechSynthesisUtterance("hello,胖妞");
    window.speechSynthesis.speak(utter);
    alert('ok');
}
var reciting = false;
var opt = [];
opt.push("<option>00 请选择...</option>");
for (var i = 0; i < meridians.length; i++) {
    opt.push("<option>" + (i < 9 ? "0" + (i + 1) : i + 1) + " " + meridians[i].name + "</option>");
}
menu.innerHTML = opt.join("");

menu.addEventListener("change", showContent);
test.addEventListener("click", recite);
hint.addEventListener("click", showhint);
dictation.addEventListener("keyup", reciteChanged);

function hidePicture() {
    var eleImage;
    for (var i = 0; i < meridians.length; i++) {
        eleImage = document.getElementById(meridians[i].id);
        if (eleImage) {
            eleImage.className = "disappear";
        }
    }
}

function showPicture() {
    var eleImage;
    if (menu.selectedIndex < 1) return;
    for (var i = 0; i < meridians.length; i++) {
        eleImage = document.getElementById(meridians[i].id);
        if (!eleImage) continue;
        if (menu.selectedIndex === i + 1) {
            eleImage.className = "appear";
        } else {
            eleImage.className = "disappear";
        }
    }
}

function ord(i) {
    if (i < 10) return "0" + i + ".";
    return "" + i + ".";
}

function size(s) {
    if (s.length < 3) {
        return s + "\u3000" + "\u3000";
    }
    return s + "\u3000";
}

function enableDictating() {
    test.className = "appear";
    dictationList.className = "appear";
}

function disableDictating() {
    test.className = "disappear";
    hint.className = "disappear";
    hintText.className = "disappear";
    dictationList.className = "disappear";
    dictationList.innerHTML = "";
    order.className = "disappear";
    dictation.className = "disappear";
    acupoint.className = "appear";
    menu.disabled = "";
}

function hideContent() {
    acupoint.className = "disappear";
    hidePicture();
}

function displayContent() {
    acupoint.className = "appear";
    showPicture();
}

function showhint() {
    if (menu.selectedIndex < 1) return;
    hint = meridians[menu.selectedIndex - 1].acupoint[currentAcupointIndex];
    hintText.innerHTML = hint;
    dictation.focus();
}

function recite() {
    if (reciting) {
        finish();
        return;
    }
    currentAcupointIndex = 0;
    currentList = "";
    reciting = true;
    test.innerHTML = "交卷"
    hideContent();
    menu.disabled = "disabled";
    hint.className = "appear";
    dictation.className = "appear";
    hintText.className = "appear";
    hintText.innerHTML = "";
    order.className = "appear";
    dictationList.className = "appear";
    order.innerHTML = ord(currentAcupointIndex + 1);
    dictation.focus();
}
/*
function play(text) {
    var zhText = encodeURI(encodeURI(text));
    var voicebbUrl = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=3&text=" + zhText;
    voiceSrDoc.src = voicebbUrl;
    voiceAdDoc.play();
}

function playMeridian() {
    var len, i;
    if (menu.selectedIndex < 1) return;
    len = meridians[menu.selectedIndex - 1].acupoint.length;
    for (i = 0; i < len; i++) {
        play(meridians[menu.selectedIndex - 1].acupoint[i]);
    }
}
*/

function reciteChanged() {
    var written = dictation.value.replace(/^\s*|\s*$/g, "");
    var currentAcupoint = meridians[menu.selectedIndex - 1].acupoint[currentAcupointIndex].replace(/^\s*|\s*$/g, "");
    if (written === currentAcupoint || written.replace("兪", "俞") === currentAcupoint || written.replace("俞", "兪") === currentAcupoint) {
        currentList += size(written) + " ";
        currentAcupointIndex++;
        if (currentAcupointIndex % 5 === 0) currentList += "<br>";
        dictationList.innerHTML = currentList;
        hintText.innerHTML = "";
        order.innerHTML = ord(currentAcupointIndex + 1);
        dictation.value = "";
        dictation.focus();
    }
    if (currentAcupointIndex === meridians[menu.selectedIndex - 1].acupoint.length) {
        finish();
    }
    order.innerHTML = ord(currentAcupointIndex + 1);
}

function finish() {
    test.innerHTML = "默写";
    reciting = false;

    disableDictating();
    if (menu.selectedIndex > 0) {
        test.className = "appear";
    }
    showPicture();
}

function showContent() {
    var acupointList = "";
    var imgFile = "";
    var i, col = 0,
        cols = 0,
        rows = 0,
        rowIndex = 0,
        index = 0,
        acupointLen = 0,
        list = [];

    var selectedIndex = menu.selectedIndex;
    if (selectedIndex > 0) {
        col = 0;
        rows = 0;
        index = selectedIndex - 1;
        cols = meridians[index].cols[rows];
        acupointLen = meridians[index].acupoint.length;
        imgFile = meridians[index].pic || "";
        for (i = 0; i < acupointLen; i++) {
            list.push(size(meridians[index].acupoint[i]));
            col++;
            if (col === cols) {
                rows++;
                cols = meridians[index].cols[rows];
                col = 0;
                list.push("<br>");
            }
        }
    } else {
        list.push("");
    }
    acupointList = list.join("");
    dictation.innerHTML = "";
    acupoint.innerHTML = acupointList;

    if (selectedIndex > 0) {
        enableDictating();
    } else {
        disableDictating();
    }
    showPicture();
    //playMeridian();

}