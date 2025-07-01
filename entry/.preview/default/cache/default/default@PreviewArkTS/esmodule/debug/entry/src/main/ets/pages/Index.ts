if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TutorialView_Params {
    tutorialList?: Array<ArticleClass>;
}
interface EnablementView_Params {
    enablementList?: Array<ArticleClass>;
}
interface EnablementItem_Params {
    enablementItem?: ArticleClass;
}
interface TutorialItem_Params {
    tutorialItem?: ArticleClass;
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
class ArticleClass {
    id: string = '';
    imageSrc: ResourceStr = '';
    title: string = '';
    brief: string = '';
    webUrl: string = '';
    constructor(id: string, imageSrc: ResourceStr, title: string, brief: string, webUrl: string) {
        this.id = id;
        this.imageSrc = imageSrc;
        this.title = title;
        this.brief = brief;
        this.webUrl = webUrl;
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
            Column.debugLine("entry/src/main/ets/pages/Index.ets(35:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F1F3F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.message);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(36:7)", "entry");
            Text.fontSize(24);
            Text.fontWeight(700);
            Text.width('100%');
            Text.textAlign(TextAlign.Start);
            Text.padding({ left: 16 });
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.lineHeight(33);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/pages/Index.ets(44:7)", "entry");
            Scroll.layoutWeight(1);
            Scroll.scrollBar(BarState.Off);
            Scroll.align(Alignment.TopStart);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(45:9)", "entry");
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Banner(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 46, col: 11 });
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
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new EnablementView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 47, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "EnablementView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TutorialView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 48, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TutorialView" });
        }
        Column.pop();
        Scroll.pop();
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
            new BannerClass('pic0', { "id": 16777218, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/training/course/video/C101718352529709527'),
            new BannerClass('pic1', { "id": 16777220, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/'),
            new BannerClass('pic2', { "id": 16777243, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/deveco-studio/'),
            new BannerClass('pic3', { "id": 16777245, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/arkts/'),
            new BannerClass('pic4', { "id": 16777234, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/arkui/'),
            new BannerClass('pic5', { "id": 16777224, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'https://developer.huawei.com/consumer/cn/sdk')
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
            Swiper.debugLine("entry/src/main/ets/pages/Index.ets(79:5)", "entry");
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
                    Image.debugLine("entry/src/main/ets/pages/Index.ets(81:9)", "entry");
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
        this.__tutorialItem = new SynchedPropertyObjectOneWayPU(params.tutorialItem, this, "tutorialItem");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TutorialItem_Params) {
    }
    updateStateVars(params: TutorialItem_Params) {
        this.__tutorialItem.reset(params.tutorialItem);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tutorialItem.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tutorialItem.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __tutorialItem: SynchedPropertySimpleOneWayPU<ArticleClass>;
    get tutorialItem() {
        return this.__tutorialItem.get();
    }
    set tutorialItem(newValue: ArticleClass) {
        this.__tutorialItem.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(102:5)", "entry");
            Row.width('100%');
            Row.height(88);
            Row.borderRadius(16);
            Row.backgroundColor(Color.White);
            Row.padding(12);
            Row.alignItems(VerticalAlign.Top);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(103:7)", "entry");
            Column.height('100%');
            Column.layoutWeight(1);
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ right: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.tutorialItem.title);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(104:9)", "entry");
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
            Text.create(this.tutorialItem.brief);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(113:9)", "entry");
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
            Image.create(this.tutorialItem.imageSrc);
            Image.debugLine("entry/src/main/ets/pages/Index.ets(129:7)", "entry");
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
        this.__enablementItem = new SynchedPropertyObjectOneWayPU(params.enablementItem, this, "enablementItem");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: EnablementItem_Params) {
    }
    updateStateVars(params: EnablementItem_Params) {
        this.__enablementItem.reset(params.enablementItem);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__enablementItem.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__enablementItem.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __enablementItem: SynchedPropertySimpleOneWayPU<ArticleClass>;
    get enablementItem() {
        return this.__enablementItem.get();
    }
    set enablementItem(newValue: ArticleClass) {
        this.__enablementItem.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(149:5)", "entry");
            Column.width(160);
            Column.height(169);
            Column.borderRadius(16);
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.enablementItem.imageSrc);
            Image.debugLine("entry/src/main/ets/pages/Index.ets(150:7)", "entry");
            Image.width('100%');
            Image.objectFit(ImageFit.Cover);
            Image.height(96);
            Image.borderRadius({
                topLeft: 16,
                topRight: 16
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.enablementItem.title);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(158:7)", "entry");
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
            Text.create(this.enablementItem.brief);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(168:7)", "entry");
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
class EnablementView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__enablementList = new ObservedPropertyObjectPU([
            new ArticleClass('1', { "id": 16777223, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'HarmonyOS第一课', '基于真实的开发场景，提供向导式学习，多维度融合课程等内容，给开发者提供全新的学习体验。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-video-courses/video-tutorials-0000001443535745'),
            new ArticleClass('2', { "id": 16777226, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, '开发指南', '提供系统能力概述、快速入门，用于指导开发者进行场景化的开发。指南涉及到的知识点包括必要的背景知识、符合开发者实际开发场景的操作任务流（开发流程、开发步骤、调测验证）以及常见问题等。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide-0000001630265101'),
            new ArticleClass('3', { "id": 16777231, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, '最佳实践', '针对新发布特性及热点特性提供详细的技术解析和开发最佳实践。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/topic-architecture-0000001678045510'),
            new ArticleClass('4', { "id": 16777246, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Codelabs', '以教学为目的的代码样例及详细的开发指导，帮助开发者一步步地完成指定场景的应用开发并掌握相关知识。Codelabs将最新的鸿蒙生态应用开发技术与典型场景结合，让开发者快速地掌握开发高质量应用的方法。同时支持互动式操作，通过文字、代码和效果联动为开发者带来更佳的学习体验。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-codelabs/codelabs-0000001443855957'),
            new ArticleClass('5', { "id": 16777252, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Sample', '面向不同类型的开发者提供的鸿蒙生态应用开发优秀实践，每个Sample Code都是一个可运行的工程，为开发者提供实例化的代码参考。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-samples/samples-0000001162414961'),
            new ArticleClass('6', { "id": 16777236, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'API参考', '面向开发者提供鸿蒙系统开放接口的全集，供开发者了解具体接口使用方法。API参考详细地描述了每个接口的功能、使用限制、参数名、参数类型、参数含义、取值范围、权限、注意事项、错误码及返回值等。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/development-intro-0000001580026066'),
            new ArticleClass('7', { "id": 16777239, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'FAQ', '开发者常见问题的总结，开发者可以通过FAQ更高效地解决常见问题。FAQ会持续刷新，及时呈现最新的常见问题。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-development-0000001753952202'),
            new ArticleClass('8', { "id": 16777240, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, '开发者论坛', '和其他应用开发者交流技术、共同进步。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
        ], this, "enablementList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: EnablementView_Params) {
        if (params.enablementList !== undefined) {
            this.enablementList = params.enablementList;
        }
    }
    updateStateVars(params: EnablementView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__enablementList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__enablementList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __enablementList: ObservedPropertyObjectPU<Array<ArticleClass>>;
    get enablementList() {
        return this.__enablementList.get();
    }
    set enablementList(newValue: Array<ArticleClass>) {
        this.__enablementList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(218:5)", "entry");
            Column.margin({ top: 18 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('赋能套件');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(219:7)", "entry");
            Text.fontColor('#182431');
            Text.fontSize(16);
            Text.fontWeight(500);
            Text.fontFamily('HarmonyHeiTi-medium');
            Text.textAlign(TextAlign.Start);
            Text.padding({ left: 16 });
            Text.margin({ bottom: 8.5 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("entry/src/main/ets/pages/Index.ets(227:7)", "entry");
            Grid.rowsTemplate('1fr');
            Grid.columnsGap(8);
            Grid.scrollBar(BarState.Off);
            Grid.height(169);
            Grid.padding({ top: 2, left: 16, right: 16 });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("entry/src/main/ets/pages/Index.ets(229:11)", "entry");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new EnablementItem(this, { enablementItem: item }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 230, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            enablementItem: item
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        enablementItem: item
                                    });
                                }
                            }, { name: "EnablementItem" });
                        }
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.enablementList, forEachItemGenFunction, (item: ArticleClass) => item.id, false, false);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class TutorialView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__tutorialList = new ObservedPropertyObjectPU([
            new ArticleClass('1', { "id": 16777237, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step1 环境的搭建', '本篇教程实现了快速入门——一个用于了解和学习HarmonyOS的应用程序。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('2', { "id": 16777247, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step2 使用Swiper构建运营广告位', 'Swiper组件提供滑动轮播显示的能力。Swiper本身是一个容器组件，当设置了多个子组件后，可以对这些子组件进行轮播显示。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('3', { "id": 16777230, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step3 创建和组合视图', 'Item定义子组件相关特征。相关组件支持使用条件渲染、循环渲染、懒加载等方式生成子组件。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('4', { "id": 16777251, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step4 网格和列表组建的使用', '网格和列表组件中，当Item达到一定数量，内容超过屏幕大小时，可以自动提供滚动功能，适合用于呈现同类数据类型或数据类型集', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('5', { "id": 16777235, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step5 应用架构设计基础——MVVM模式', 'ArkUI采取MVVM = Model + View + ViewModel模式，将数据与视图绑定在一起，更新数据的时候直接更新视图。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('6', { "id": 16777253, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step6 应用架构设计基础——三层架构', '为了更好地适配复杂应用的开发，建议采用三层架构的方式对整个应用的功能进行模块化，实现高内聚、低耦合开发。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('7', { "id": 16777225, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step6 ArkWeb页面适配', 'ArkWeb（方舟Web）提供了Web组件，用于在应用程序中显示Web页面内容，为开发者提供页面加载、页面交互、页面调试等能力。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('8', { "id": 16777219, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step7 数据驱动UI更新', '数据更新的同时会直接驱动UI的改变', 'xxx'),
            new ArticleClass('9', { "id": 16777232, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step8 设置组件导航', 'Navigation组件适用于模块内页面切换，一次开发，多端部署场景。通过组件级路由能力实现更加自然流畅的转场体验，并提供多种标题栏样式来呈现更好的标题和内容联动效果。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('10', { "id": 16777233, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step9 原生智能：AI语音朗读', '文本转语音服务提供将文本信息转换为语音并进行播报的能力，便于用户与设备进行互动，实现实时语音交互，文本播报。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('11', { "id": 16777238, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step10 原生互联：分布式流转', '流转能力打破设备界限，多设备联动，使用户应用程序可分可合、可流转，实现如邮件跨设备编辑、多设备协同健身、多屏游戏等分布式业务。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('12', { "id": 16777242, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "entry" }, 'Step11 一次开发，多端部署', '一套代码工程，一次开发上架，多端按需部署。支撑开发者快速高效的开发支持多种终端设备形态的应用，实现对不同设备兼容的同时，提供跨设备的流转、迁移和协同的分布式体验。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
        ], this, "tutorialList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TutorialView_Params) {
        if (params.tutorialList !== undefined) {
            this.tutorialList = params.tutorialList;
        }
    }
    updateStateVars(params: TutorialView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tutorialList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tutorialList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __tutorialList: ObservedPropertyObjectPU<Array<ArticleClass>>;
    get tutorialList() {
        return this.__tutorialList.get();
    }
    set tutorialList(newValue: Array<ArticleClass>) {
        this.__tutorialList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(288:5)", "entry");
            Column.margin({ top: 18 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('入门教程');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(289:7)", "entry");
            Text.fontColor('#182431');
            Text.fontSize(16);
            Text.fontWeight(500);
            Text.fontFamily('HarmonyHeiTi-medium');
            Text.textAlign(TextAlign.Start);
            Text.padding({ left: 16 });
            Text.margin({ bottom: 8.5 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: 12 });
            List.debugLine("entry/src/main/ets/pages/Index.ets(297:7)", "entry");
            List.scrollBar(BarState.Off);
            List.padding({ left: 16, right: 16 });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("entry/src/main/ets/pages/Index.ets(299:11)", "entry");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new TutorialItem(this, { tutorialItem: item }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 300, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            tutorialItem: item
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        tutorialItem: item
                                    });
                                }
                            }, { name: "TutorialItem" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.tutorialList, forEachItemGenFunction, (item: ArticleClass) => item.id, false, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(2, "EnablementView", new EnablementView(undefined, {}), "TutorialView", new TutorialView(undefined, {}));
    previewComponent();
}
else {
    registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.huawei.quickstart", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
}
