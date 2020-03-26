class Meridian {
    meridians = ["手太阴肺经", "手阳明大肠经", "足阳明胃经", "足太阴脾经", "手少阴心经", "手太阳小肠经", "足太阳膀胱经", "足少阴肾经", "手厥阴心包经", "手少阳三焦经", "足少阳胆经", "足厥阴肝经", "任脉", "督脉"];
    meridiansShortName = ["fei", "daChang", "wei", "pi", "xin", "xiaoChang", "pangGuan", "shen", "xinBao", "sanJiao", "dan", "gang", "renMai", "duMai"];
    acupoints = [
        ["中府", "云门", "天府", "侠白", "尺泽", "孔最", "列缺", "经渠", "太渊", "鱼际", "少商"],
        ["商阳", "二间", "三间", "合谷", "阳溪", "偏历", "温溜", "下廉", "上廉", "手三里", "曲池", "肘髎", "五里", "臂臑", "肩髃", "巨骨", "天鼎", "扶突", "口合髎", "迎香"],
        ["承泣", "四白", "巨髎", "地仓", "大迎", "颊车", "下关", "头维", "人迎", "水突", "气舍", "缺盆", "气户", "库房", "屋翳", "膺窗", "乳中", "乳根", "不容", "承满", "梁门", "关门", "太乙", "滑肉门", "天枢", "外陵", "大巨", "水道", "归来", "气冲", "髀关", "伏兔", "阴市", "梁丘", "犊鼻", "足三里", "上巨虚", "条口", "下巨虚", "丰隆", "解溪", "冲阳", "陷谷", "内庭", "厉兑"],
        ["隐白", "大都", "太白", "公孙", "商丘", "三阴交", "漏谷", "地机", "阴陵泉", "血海", "箕门", "冲门", "府舍", "腹结", "大横", "腹哀", "食窦", "天溪", "胸乡", "周荣", "大包"],
        ["极泉", "青灵", "少海", "灵道", "通里", "阴郄", "神门", "少府", "少冲"],
        ["少泽", "前谷", "后溪", "腕骨", "阳谷", "养老", "支正", "小海", "肩贞", "臑兪", "天宗", "秉风", "曲垣", "肩外兪", "肩中兪", "天窗", "天容", "颧髎", "听宫"],
        ["睛明", "攒竹", "眉冲", "曲差", "五处", "承光", "通天", "络却", "玉枕", "天柱", "大杼", "风门", "肺兪", "厥阴兪", "心兪", "督兪", "膈兪", "肝兪", "胆兪", "脾兪", "胃兪", "三焦兪", "肾兪", "气海兪", "大肠兪", "关元兪", "小肠兪", "膀胱兪", "中膂兪", "白环兪", "上髎", "次髎", "中髎", "下髎", "会阳", "承扶", "殷门", "浮郄", "委阳", "委中", "附分", "魄户", "膏肓", "神堂", "譩譆", "膈关", "魂门", "阳纲", "意舍", "胃仓", "肓门", "志室", "胞肓", "秩边", "合阳", "承筋", "承山", "飞扬", "跗阳", "昆仑", "仆参", "申脉", "金门", "京骨", "束骨", "通谷", "至阴"],
        ["涌泉", "然谷", "太溪", "大钟", "水泉", "照海", "复溜", "交信", "筑宾", "阴谷", "横骨", "大赫", "气穴", "四满 ", "中注", "肓兪", "商曲", "石关", "阴都", "通谷", "幽门", "步廊", "神封", "灵墟", "神藏", "彧中", "兪府"],
        ["天池", "天泉", "曲泽", "郄门", "间使", "内关", "大陵", "劳宫", "中冲"],
        ["关冲", "液门", "中渚", "阳池", "外关", "支沟", "会宗", "三阳络", "四渎", "天井", "清冷渊", "消泺", "臑会", "肩髎", "天髎", "天牖", "翳风", "瘛脉", "颅息", "角孙", "耳门", "禾髎", "丝竹空"],
        ["瞳子髎", "听会", "上关", "颔厌", "悬颅", "悬厘", "曲鬓", "率谷", "天冲", "浮白", "头窍阴", "完骨", "本神", "阳白", "头临泣", "目窗", "正营", "承灵", "脑空", "风池", "肩井", "渊腋", "辄筋", "日月", "京门", "带脉", "五枢", "维道", "居髎", "环跳", "风市", "中渎", "膝阳关", "阳陵泉", "阳交", "外丘", "光明", "阳辅", "悬钟", "丘墟", "足临泣", "地五会", "侠溪", "足窍阴"],
        ["大墩", "行间", "太冲", "中封", "蠡沟", "中都", "膝关", "曲泉", "阴包", "足五里", "阴廉", "急脉", "章门", "期门"],
        ["会阴", "曲骨", "中极", "关元", "石门", "气海", "阴交", "神阙", "水分", "下腕", "建里", "中脘", "上腕", "巨阙", "鸠尾", "中庭", "膻中", "玉堂", "紫宫", "华盖", "璇玑", "天突", "廉泉", "承浆"],
        ["长强", "腰兪", "腰阳关", "命门", "悬枢", "脊中", "中枢", "筋缩", "至阳", "灵台", "神道", "身柱", "陶道", "大椎", "哑门", "风府", "脑户", "强间", "后顶", "百会", "前顶", "囟会", "上星", "神庭", "素髎", "水沟", "兑端", "龈交"]
    ];
    cols = [
        [5, 4, 2],
        [5, 5, 5, 5],
        [5, 3, 5, 5, 6, 6, 5, 5, 5],
        [5, 4, 2, 5, 5],
        [3, 4, 2],
        [5, 3, 5, 2, 4],
        [5, 5, 2, 5, 5, 5, 5, 2, 6, 5, 5, 4, 5, 5, 3],
        [5, 5, 5, 5, 2],
        [3, 4, 2],
        [5, 5, 5, 5, 3],
        [3, 4, 5, 6, 3, 5, 4, 3, 6, 5],
        [4, 4, 4, 2],
        [5, 5, 5, 5, 4],
        [5, 5, 5, 5, 5, 3]
    ];

    ord(i) {
        return `${i < 9 ? "0" + (i+1) + ".": "" + (i+1) + "."}`;
    }

    getMeridiansCount() {
        return this.meridians.length;
    }

    getAcupointsCount(meridianIndex) {
        if (meridianIndex < 0 || meridianIndex >= this.meridians.length) return -1;
        return this.acupoints[meridianIndex].length;
    }

    getMeridianName(meridianIndex) {
        if (meridianIndex < 0 || meridianIndex >= this.meridians.length) return "";
        return this.meridians[meridianIndex].trim();
    }

    getMeridianShortName(meridianIndex) {
        if (meridianIndex < 0 || meridianIndex >= this.meridiansShortName.length) return "";
        return this.meridiansShortName[meridianIndex];
    }

    getMeridianFullname(meridianIndex) {
        return `${this.ord(meridianIndex)}${this.getMeridianName(meridianIndex)} 共${this.getAcupointsCount(meridianIndex)}穴`;
    }

    isMeridianIndexValid(meridianIndex) {
        if (meridianIndex >= 0 && meridianIndex < this.meridians.length) return true;
        return false;
    }
    isAcupointIndexValid(meridianIndex, acupointIndex) {
        if (!this.isMeridianIndexValid(meridianIndex)) return false;
        if (acupointIndex >= 0 && acupointIndex < this.acupoints[meridianIndex].length) return true;
        return false;
    }

    getAcupointName(meridianIndex, acupointIndex) {
        if (this.isMeridianIndexValid(meridianIndex) && this.isAcupointIndexValid(meridianIndex, acupointIndex)) {
            return this.acupoints[meridianIndex][acupointIndex].trim();
        }
        return "";
    }

    _preprocessAcupointName(acupointName) {
        return acupointName.trim().replace("俞", "兪");
    }

    /* 获取 穴位 的序号（0开始）{meridianOrder: x, acupointOrder: y } */
    getAcupointOrder(acupointName, meridianIndex = -1) {
        let searchFrom = meridianIndex,
            searchTo = meridianIndex + 1;

        acupointName = this._preprocessAcupointName(acupointName);
        if (meridianIndex < 0 || meridianIndex >= this.meridians.length) {
            searchFrom = 0;
            searchTo = this.meridians.length;
        }

        for (let i = searchFrom; i < searchTo; i++) {
            for (let j = 0; j < this.acupoints[i].length; j++) {
                if (acupointName === this.acupoints[i][j]) return {
                    meridianOrder: i,
                    acupointOrder: j
                }
            }
        }
        return {
            meridianOrder: -1,
            acupointOrder: -1
        };
    }

    isAcupointNameEqual(name, meridianIndex, acupointIndex) {
        if (!this.isMeridianIndexValid(meridianIndex)) return false;
        if (!this.isAcupointIndexValid(meridianIndex, acupointIndex)) return false;
        let acupointName = this.getAcupointName(meridianIndex, acupointIndex);
        if (this._preprocessAcupointName(name) === acupointName) return true;
        return false;
    }


    /* 根据穴位名称获取行列号 */
    getCoordinate(acupointName, meridianIndex = -1) {
        let row = -1,
            col = -1,
            order = this.getAcupointOrder(acupointName, meridianIndex);
        if (order.meridianOrder < 0) return {
            row,
            col
        };

        row = 0;
        col = order.acupointOrder;
        for (let i = 0; i < this.cols[order.meridianOrder].length; i++) {
            if (col < this.cols[order.meridianOrder][i]) break;
            col -= this.cols[order.meridianOrder][i];
            row++;
        }

        return {
            row,
            col
        };
    }

    _genIdString(row, col) {
        return `acupoint-${row}-${col}`;
    }

    getIdString(acupointName, meridianIndex = -1) {
        let {
            row,
            col
        } = this.getCoordinate(acupointName, meridianIndex);

        return this._genIdString(row, col);
    }

    genTable(meridianIndex) {
        let tab = [];
        let rows = 0,
            cols = 0,
            position = 0;
        if (!this.isMeridianIndexValid(meridianIndex)) return "";
        rows = this.cols[meridianIndex].length;
        cols = Math.max(...this.cols[meridianIndex]);
        for (let row = 0; row < rows; row++) {
            tab.push(`<tr>`);
            for (let col = 0; col < cols; col++) {
                tab.push(`    <td>`);
                if (col < this.cols[meridianIndex][row]) {
                    tab.push(`        <span id="${this._genIdString(row,col)}">${this.acupoints[meridianIndex][position + col]}</span>`);
                }
                tab.push(`    </td>`);
            }
            position += this.cols[meridianIndex][row];
            tab.push(`</tr>`);
        }
        return tab.join("\n");
    }

    genMenu() {
        let menu = [];
        menu.push("<option>00.请选择......</option>");
        for (let i = 0; i < this.meridians.length; i++) {
            menu.push(`<option>${this.getMeridianFullname(i)}</option>`);
        }
        return menu.join("\n");
    }
}

class Reaction {
    constructor() {
        this.menu = document.getElementById("menu");
        this.meridian = new Meridian();
        this.currentMenuIndex = 0;
        this.acupointList = document.getElementById("acupointList");
        this.recite = document.getElementById("recite");
        this.hint = document.getElementById("hint");
        this.order = document.getElementById("order");
        this.hintText = document.getElementById("hintText");
        this.acupoint = document.getElementById("acupoint");
        this.reciting = false;
        this.hinted = false;
        this.hintList = [];
        this.currentAcupointIndex = 0;
        this.classAppear = "appear";
        this.classDisappear = "disappear";
        this.classAcupointHidden = "acupointHidden";
        this.classHinted = "hinted";

        this.menu.innerHTML = this.meridian.genMenu();

        this.menu.addEventListener("change", this.menuChange.bind(this));
        this.recite.addEventListener("click", this.reciteClick.bind(this));
        this.hint.addEventListener("click", this.hintClick.bind(this));
        this.acupoint.addEventListener("keyup", this.acupointChanged.bind(this));
    }

    acupointChanged() {
        let acupoint = this.acupoint.value.trim();
        if (this.meridian.isAcupointNameEqual(acupoint, this.currentMenuIndex - 1, this.currentAcupointIndex)) {
            this.showAcupoint(this.menu.selectedIndex - 1, this.currentAcupointIndex);
            if (this.currentAcupointIndex === this.meridian.getAcupointsCount(this.currentMenuIndex - 1) - 1) {
                this.finished();
                return;
            }
            this.hintMark(false);
            this.currentAcupointIndex++;
            this.order.innerHTML = `穴位序号:${this.meridian.ord(this.currentAcupointIndex)}`;
            this.hintText.innerHTML = "";
            this.hinted = false;
            this.acupoint.value = "";
            this.acupoint.focus();
        }
    }

    finished() {
        this.currentAcupointIndex = 0;
        this.reciting = false;
        this.hinted = false;
        this.hintMark(true);
        this.hintList = [];
        this.menu.disabled = "";
        this.recite.innerHTML = "默写";
        this.acupoint.value = "";
        this.order.className = this.classDisappear;
        this.hint.className = this.classDisappear;
        this.acupoint.className = this.classDisappear;
        this.hintText.className = this.classDisappear;
        this.showPicture(this.currentMenuIndex - 1);
    }

    hintClick() {
        if (this.menu.selectedIndex === 0) {
            this.acupoint.focus();
            return;
        }
        if (this.hinted) {
            this.acupoint.focus();
            return;
        }
        let acupointName = this.meridian.getAcupointName(this.menu.selectedIndex - 1, this.currentAcupointIndex);
        this.hintText.innerHTML = acupointName;
        this.hintText.className = this.classAppear;
        this.hinted = true;
        this.hintList.push(this.meridian.getIdString(acupointName, this.menu.selectedIndex - 1));
        this.acupoint.focus();
    }

    hintMark(removeHintMark = true) {
        for (let i = 0; i < this.hintList.length; i++) {
            let id = this.hintList[i];
            let el = document.getElementById(id);
            if (el) {
                if (removeHintMark) {
                    el.classList.remove(this.classHinted);
                } else {
                    el.className = this.classHinted;
                }
            }
        }
    }

    hidePicture() {
        let meridiansCount = this.meridian.getMeridiansCount();
        for (let i = 0; i < meridiansCount; i++) {
            let elImg = document.getElementById(this.meridian.getMeridianShortName(i));
            if (elImg) elImg.className = "disappear";
        }
    }
    showPicture(pictureIndex) {
        if (pictureIndex < 0) return;
        let imgId = this.meridian.getMeridianShortName(pictureIndex);
        let elImg = document.getElementById(imgId);
        if (elImg) elImg.className = "appear";
    }
    getAcupointElement(meridianIndex, acupointIndex) {
        let acupointName = this.meridian.getAcupointName(meridianIndex, acupointIndex);
        let acupointId = this.meridian.getIdString(acupointName, this.menu.selectedIndex - 1);
        return document.getElementById(acupointId);
    }
    hideAcupoint(meridianIndex, acupointIndex) {
        let elAcupoint = this.getAcupointElement(meridianIndex, acupointIndex);
        if (elAcupoint) {
            elAcupoint.className = this.classAcupointHidden;
        }
    }
    showAcupoint(meridianIndex, acupointIndex) {
        let elAcupoint = this.getAcupointElement(meridianIndex, acupointIndex);
        if (elAcupoint) {
            elAcupoint.classList.remove(this.classAcupointHidden);
        }
    }
    hideAcupoints() {
        if (this.menu.selectedIndex === 0) return;
        let acupointCount = this.meridian.getAcupointsCount(this.menu.selectedIndex - 1);
        for (let i = this.currentAcupointIndex; i < acupointCount; i++) {
            this.hideAcupoint(this.menu.selectedIndex - 1, i);
        }
    }
    showAcupoints() {
        if (this.menu.selectedIndex === 0) return;
        let acupointCount = this.meridian.getAcupointsCount(this.menu.selectedIndex - 1);
        for (let i = 0; i < acupointCount; i++) {
            this.showAcupoint(this.menu.selectedIndex - 1, i);
        }
    }
    reciteClick() {
        if (this.menu.selectedIndex === 0) return;

        if (!this.reciting) {
            this.menu.disabled = "disabled";
            this.recite.innerHTML = "交卷";
            this.hint.className = this.classAppear;
            this.acupoint.className = this.classAppear;
            this.order.className = this.classAppear;
            this.hidePicture();
            this.acupoint.focus();
            this.order.innerHTML = `穴位序号:${this.meridian.ord(this.currentAcupointIndex)}`;
            this.hideAcupoints();
            this.hintMark(false);
        } else {
            this.menu.disabled = "";
            this.recite.innerHTML = "默写";
            this.showPicture(this.menu.selectedIndex - 1);
            this.hint.className = this.classDisappear;
            this.acupoint.className = this.classDisappear;
            this.hintText.className = this.classDisappear;
            this.order.className = this.classDisappear;
            this.acupoint.value = "";
            this.showAcupoints();
            this.hintMark(true);
            this.hinted = false;
        }

        this.reciting = !this.reciting;
    }
    menuChange() {
        if (this.currentMenuIndex === this.menu.selectedIndex) return;
        this.currentMenuIndex = this.menu.selectedIndex;
        this.acupointList.innerHTML = this.meridian.genTable(this.currentMenuIndex - 1);

        if (this.currentMenuIndex > 0) {
            this.recite.className = "appear";
        }
        if (this.menu.selectedIndex === 0) {
            this.recite.className = "disappear";
        } else {
            this.recite.className = "appear";
        }
        this.hidePicture();
        if (this.menu.selectedIndex > 0) {
            this.showPicture(this.currentMenuIndex - 1);
        }

        this.hinted = false;
        this.hintList = [];
        this.currentAcupointIndex = 0;
    }

}

const reaction = new Reaction();