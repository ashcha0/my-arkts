if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface EnablementItem_Params {
    title?: string;
    brief?: string;
}
interface TutorialItem_Params {
    title?: string;
    brief?: string;
}
interface Banner_Params {
    bannerList?: Array<BannerClass>;
}
interface Index_Params {
    message?: string;
}
class BannerClass {
    id: string = '';
    imageSrc: ResourceStr = '';
    url: string = '';
    constructor(id: string, imageSrc: ResourceStr, url: string) {
        this.id = id;
        this.imageSrc = imageSrc;
        this.url = url;
    }
}
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('快速入门', this, "message");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(19:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F1F3F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.message);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(20:7)", "entry");
            Text.fontSize(24);
            Text.fontWeight(700);
            Text.width('100%');
            Text.textAlign(TextAlign.Start);
            Text.padding({ left: 16 });
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.lineHeight(33);
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Banner(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 28, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Banner" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
class Banner extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bannerList = new ObservedPropertyObjectPU([
            new BannerClass('pic0', { "id": 16777233, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/training/course/video/C101718352529709527'),
            new BannerClass('pic1', { "id": 16777232, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/'),
            new BannerClass('pic2', { "id": 16777230, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/deveco-studio/'),
            new BannerClass('pic3', { "id": 16777231, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/arkts/'),
            new BannerClass('pic4', { "id": 16777221, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/arkui/'),
            new BannerClass('pic5', { "id": 16777228, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/sdk')
        ], this, "bannerList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Banner_Params) {
        if (params.bannerList !== undefined) {
            this.bannerList = params.bannerList;
        }
    }
    updateStateVars(params: Banner_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bannerList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bannerList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __bannerList: ObservedPropertyObjectPU<Array<BannerClass>>;
    get bannerList() {
        return this.__bannerList.get();
    }
    set bannerList(newValue: Array<BannerClass>) {
        this.__bannerList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.debugLine("entry/src/main/ets/pages/Index.ets(55:5)", "entry");
            Swiper.autoPlay(true);
            Swiper.loop(true);
            Swiper.indicator(new DotIndicator()
                .color('#1a000000')
                .selectedColor('#0A59F7'));
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.imageSrc);
                    Image.debugLine("entry/src/main/ets/pages/Index.ets(57:9)", "entry");
                    Image.objectFit(ImageFit.Contain);
                    Image.width('100%');
                    Image.padding({ top: 11, left: 16, right: 16 });
                    Image.borderRadius(16);
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, this.bannerList, forEachItemGenFunction, (item: BannerClass, index: number) => item.id, true, true);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class TutorialItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.title = 'Step1 快速入门介绍';
        this.brief = '本篇教程实现了快速入门——一个用于了解和学习HarmonyOS的应用程序 。';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TutorialItem_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.brief !== undefined) {
            this.brief = params.brief;
        }
    }
    updateStateVars(params: TutorialItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private title: string;
    private brief: string;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(80:5)", "entry");
            Row.width('100%');
            Row.height(88);
            Row.borderRadius(16);
            Row.backgroundColor(Color.White);
            Row.padding(12);
            Row.alignItems(VerticalAlign.Top);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(81:7)", "entry");
            Column.height('100%');
            Column.layoutWeight(1);
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ right: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(82:9)", "entry");
            Text.height(19);
            Text.width('100%');
            Text.fontSize(14);
            Text.textAlign(TextAlign.Start);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(1);
            Text.fontWeight(400);
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.brief);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(91:9)", "entry");
            Text.height(32);
            Text.width('100%');
            Text.fontSize(12);
            Text.textAlign(TextAlign.Start);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(2);
            Text.fontWeight(400);
            Text.fontColor('rgba(0, 0, 0, 0.6)');
            Text.margin({ top: 5 });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777227, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(107:7)", "entry");
            Image.height(64);
            Image.width(108);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius(16);
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class EnablementItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.title = 'HarmonyOS第一课';
        this.brief = '基于真实的开发场景，提供向导式学习，多维度融合课程等内容，给开发者提供全新的学习体验。';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: EnablementItem_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.brief !== undefined) {
            this.brief = params.brief;
        }
    }
    updateStateVars(params: EnablementItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private title: string;
    private brief: string;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(129:5)", "entry");
            Column.width(160);
            Column.height(169);
            Column.borderRadius(16);
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777227, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(130:7)", "entry");
            Image.width('100%');
            Image.objectFit(ImageFit.Cover);
            Image.height(96);
            Image.borderRadius({
                topLeft: 16,
                topRight: 16
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(138:7)", "entry");
            Text.height(19);
            Text.width('100%');
            Text.fontSize(14);
            Text.textAlign(TextAlign.Start);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(1);
            Text.fontWeight(400);
            Text.padding({ left: 12, right: 12 });
            Text.margin({ top: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.brief);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(148:7)", "entry");
            Text.height(32);
            Text.width('100%');
            Text.fontSize(12);
            Text.textAlign(TextAlign.Start);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(2);
            Text.fontWeight(400);
            Text.fontColor('rgba(0, 0, 0, 0.6)');
            Text.padding({ left: 12, right: 12 });
            Text.margin({ top: 2 });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(3, "Banner", new Banner(undefined, {}), "TutorialItem", new TutorialItem(undefined, {}), "EnablementItem", new EnablementItem(undefined, {}));
    previewComponent();
}
else {
    registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.huawei.quickstart", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
}
