import './moment/zh-CN.js'

export default ({
    // 全局 : 针对部分按钮或标题
    nextStep:'下一步',
    preStep:'上一步',
    detail:'详情',
    setting:'配置',
    update:'更新',
    more:'更多',
    create:'创建',
    newCreate:'新建',
    add:'添加',
    mod:'修改',
    invite:'邀请',
    access:'接入',
    join:'加入',
    leave:'离开',
    delete:'删除',
    save:'保存',
    exec:'执行',
    complete:'完成',
    copy:'复制',
    close:'关闭',
    cancel:'取消',
    confirm:'确认',
    confirmTextPre:'请输入',
    confirmTextFix:'来确认',
    tips:'提示',
    tipsListToBottom:'我有底线',
    tipsDelete:'已删除. ',
    tipsPost:'已添加. ',
    tipsSave:'已保存. ',
    tipsCreate:'已创建. ',
    tipsCopy:'已复制. ',
    tipsGenerate:'已生成. ',
    tipsCopyInvite:'已复制 邀请链接 到剪切板. ',
    tipsItsYou:'you',
    tipsNoAuthority:"无权限",
    tipsNoResource:'资源未找到，请联系管理员！',
    tipsNoFoundData:'未加载到数据,请刷新重试 !',
    tipsFaild:'加载失败 .',
    tipsNoAuthorityByAdmin:'系统管理员权限无需设置分组权限',

    // 模块内
    login: {
        loginTitle:'Login in',
        loginMemo:'Sign up',
        registerTitle:'Sign up',
        registerMemo:'Sign in',
        username: "用户名",
        password: '密码',
        prepassword: "确认密码",
        login: '登  录',
        register:'注  册'
    },
    services:{
        // index
        services:'服务',
        servicesAdd:'创建服务',
        authority:'服务权限',
        authorityMemo:'说明: R(访问权限) / W(操作权限) / X(执行权限)',
        groupAdd:'创建分组',
        downloadYaml:'下载yaml',
        imageMoreButton:'更多镜像',
        firstButton:'首次发布',
        firstMemo1:'当前服务尚无版本可发布，请参考以下请求将新版本推送至本平台后再进行发布。',
        firstMemo2:'推荐将此请求放入CI工具中，每次发版可自动推送至本平台。',
        // label
        serviceMatch:'匹配规则',
        serviceGateway:'网关',
        serviceStatus:'运行状态',
        serviceUrl:'服务地址',
        serviceReleaseStatus:'发布状态',
        serviceTime:'运行时长',
        serviceImage:'镜像',
        serviceDeploy:'发布',
        serviceAllTime:'运行总时长',
        serviceAllTimeMemo:'服务运行的总时间. ',
        serviceDeployNum:'发布次数',
        serviceImageNum:'镜像个数',
        serviceActivity:'最新动态',
        tipsCompleteAuthority:'修改服务权限成功.',
        tipsNoTiminal:"该服务下无资源.",
        tipsServiceDeploy:'<%-num%> 个服务发布中',
        // dialog
        addDialog:{
            name:'服务名称',
            cluster:'集群',
            namespace:'命名空间'
        },
        heatmapChart:{
            January:'一月',
            February:'二月',
            March:'三月',
            April:'四月',
            May:'五月',
            June:'六月',
            July:'七月',
            August:'八月',
            September:'九月',
            October:'十月',
            November:'十一月',
            December:'十二月',
            Sunday:'星期日',
            Monday:'星期一',
            Tuesday:'星期二',
            Wednesday:'星期三',
            Thursday:'星期四',
            Friday:'星期五',
            Saturday:'星期六'
        },
        pipeChart:{
            status1:"运行",
            status2:"等待",
            status3:"未知",
            status4:"正常",
            status5:"异常"
        },
        // status
        errorStatus:{
            'stop':'尚未运行',
            'upgrade':'滚动升级中',
            'running':'正常运行中',
            'error':'服务运行异常'
        },
        status:{
            '-1':'尚未运行',
            '0':'正常运行',
            '1':'金丝雀发布中',
            '2':'蓝绿发布中',
            '3':'ABTEST发布中',
            '4':'滚动发布中',
            '8':'运行失败',
        },
        releaseStatus:{
            '0':'准备中',
            '1':'服役中',
            '2':'退役',
            '3':'异常',
        },
        releaseType:{
            '0':'首次发布',
            '1':'金丝雀发布',
            '2':'蓝绿发布',
            '4':'ABTEST发布',
            '8':'滚动发布',
        },
        // detail
        menuSummary:'概览',
        menuComponent:'组件',
        menuImage:'镜像',
        menuDeployment:'发布记录',
        menuTopology:'拓扑信息',
        menuSetting:'设置',
        //
        events:{
            type:"类型",
            mode:'方式',
            startTime:'开始时间',
            endTime:'结束时间',
        },
        createCfg:{// 新建服务流程
            inputAddress:'输入地址',
            inputPath:'输入路径',
            inputArgs:'输入参数',
            configDefault:'使用默认配置',
            configOld:'修改已有配置',
            configImport:'导入之前配置',
            configAuto:'自定义配置',
            //
            protocol:'协议',
            path:'路径',
            port:'端口',
            initialDelaySeconds:'延迟',
            periodSeconds:'频率',
            timeoutSeconds:'超时',
            successThreshold:'健康阀值',
            failureThreshold:'不健康阀值',

            replicas:'副本数量',
            type:'类型',
            name:'名称',
            containerPort:'容器端口',
            servicePort:'服务端口',
            env:'环境变量',
            command:'启动命令',
            args:'启动参数',
            store:'存储',
            tipsMustHost:'HOST 必填',
            tipsMustReplicas:'副本数量 必填',
            tipsMustPorts:'端口信息 不完整',
            //
            searchByNameAndLabel:'请输入name或label查询',
            setting:'配置信息',
            settingImport:'导入配置',
            settingHanle:'手动编写配置',
            resetSelect:'重新选择',
            tipsHost:'HOST必须输入外部IP地址或域名',
            tipsCandidateFlow:'候选节点没有流量配置'
        },
        component:{
            cellType:'类型',
            cellName:'名称',
            cellEnv:'标签',
            cellCreateAt:'创建时间',
            cellInfo:'信息',
            envStore:'存储方式',
            envResource:'资源大小',
            envPodMemo:'运行中POD / 总数量',
            podTitle:'POD信息',
            podName:'名称',
            podNode:'节点',
            podType:'类型',
            podPath:'路径',
            podPort:'端口',
            podEnv:'标签',
            containerName:'名称',
            containerImage:'镜像',
            containerCommand:'命令',
            containerEnv:'标签',
        },
        image:{
            now:'当',
            upgrade:'升级',
            rollback:'回滚',
            imageTitle:"镜像信息",
            imageVersion:'版本',
            imageTime:'时间',
            imagePath:'镜像',
            gitTitle:'GIT信息',
            deployTitle:'部署信息',
            deployName:'名称',
            deployCreateBy:'发布人',
            deployOprChannel:'操作渠道',
            deployTime:'时间',
        },
        deploy:{
            nowVersion:'当前版本',
            category:'发布类型',
            podNum:'POD数',
            labelName:'发布名称',
            labelType:'发布方式',
            labelChannel:'操作渠道',
            labelCreate:'创建',
            labelCreateBy:'创建人',
            labelCreateAt:'首次发布时间',
            labelWork:'服役',
            labelStatus:'状态',
            labelWorkStart:'服役时间',
            labelWorkEnd:'服役结束',
            labelStartTime:'开始',
            labelEndTime:'结束',
            status:{
                '1':'准备中',
                '2':'服役中',
                '3':'退役',
                '4':'异常'
            },
            releaseCreateBy:'操作人',
            releaseType:'操作类型',
            releaseDetail:'详情',
            releaseTime:'时间',
        },
        setting:{
            tokenTitle:'Token',
            tokenCopyButton:'复制TOKEN',
            tokenShowButton:'展示TOKEN',
            tokenHideButton:'隐藏TOKEN',
            tokenGenerateButton:'重新创建TOKEN',
            delServiceTitle:'Delete service',
            delServiceButton:'删除服务',
            delServiceTips:'同时删除所有相关K8S资源',
            tipsCreateToken:'确认重新创建token ? '
        }
    },
    group:{
        group:'组',
        groupName:'分组名称',
        authority:'分组权限',
        authorityMemo:'说明: R(访问权限) / W(操作权限) / X(执行权限)',
        // detail
        menuSummary:'概览',
        menuMember:'成员',
        menuTopology:'拓扑信息',
        menuSetting:'设置',
        tipsLeave:'确认离开此分组 ?',
        tipsCompleteAuthority:'修改分组权限成功.',
        buttonDelete:"删除分组",
        setting:{
            infoLabelGroup:'分组名',
            tokenTitle:'Token',
            tokenCopyButton:'复制TOKEN',
            tokenShowButton:'展示TOKEN',
            tokenHideButton:'隐藏TOKEN',
            tokenGenerateButton:'重新创建TOKEN',
            slackTitle:'Slack Channel',
            slackDelTip:"确认删除 Slack Channel ( <%-channelName%> ) 关联？",
            leaveGroupTitle:'Leave group',
            leaveGroupButton:'离开分组',
            delGroupTitle:'Delete group',
            delGroupButton:'删除分组',
        },
        deleteDialog:{
            memo:'同时删除组内所有服务下相关K8S资源',
        }
    },
    cluster:{
        cluster:'集群',
        nouse:'集群不可用，请联系管理员！',
        authority:'服务权限',
        authorityMemo:'说明: R(访问权限) / W(操作权限) / X(执行权限)',
        clusterAdd:'创建集群',
        menuSummary: '概览',
        menuMember: '成员',
        menuSetting: '设置',
        // tips
        tipsAuthority:'集群权限',
        tipsAdd:'添加集群',
        tipsLeaveCluster:'确认离开此集群 ?',
        tipsDelClusterMemo:'集群使用中无法删除, 所绑定服务 ：',
        tipsUpateCluster:'已更新集群配置！',
        tipsCompleteAuthority:'修改命名空间组权限成功.',
        tipsDelMemo:"集群使用中无法删除, 所绑定服务",
        // button
        buttonLeave:'离开集群',
        buttonDelete:'删除集群',
    },
    namespace:{
        namespace:'命名空间',
        nouse:'命名空间不可用，请联系管理员！',
        export:'导入命名空间',
        menuSummary:'概览',
        menuSetting:'设置',
        //
        tipsUpdate:'已更新命名空间配置',
        tipsAuthority:'命名空间权限',
        //
        labelNamespce:'命名空间',
        labelEnv:'命名空间',
        labelResourceLimit:'资源限制',
        labelResourceRequest:'资源请求',
        //
        formNamespce:'命名空间',
        formEnv:'命名空间',
        formLimitCPU:'LimitCPU',
        formLimitMemory:'LimitMemory',
        formRequestCPU:'RequestCPU',
        formRequestMemory:'RequestMemory',
        formResourceQuota:'启用资源配额',
        //
        buttonDelete:'删除命名空间',
        deleteDialog:{
            memo:'命名空间使用中无法删除, 所绑定服务 ：',
            warning:'此操作不会删除k8s集群中的命名空间。'
        }
    },
    user:{
        profile:'Profile',
        account:'Account',
        application:'Application',
        tipsDeleteTitle:'注销',
        buttonUpdate:'更新用户信息',
        //
        labelAvator:'选择头像',
        labelUsername:'用户名',
        labelNickname:'别名',
        labelEmail:'邮箱',
        // tips
        tipsGroupAdmin:'分组管理员',
        tipsClusterAdmin:'集群管理员',
        tipsDelete:'确认删除此用户 ?',
        tipsDeleteAuthor:'删除授权',
        tipsAuthorityUsers:'已授权Slack用户 :',
        tipsSlackDel:"Slack用户（ <%-name%> ）授权已删除. ",
        tipsConfirmSlackDel:"确认删除 Slack用户（ <%=name%> ）授权 ?"
    },
    notification:{
        notification:'Notifications',
        seeAll:'查看更多',
        allMessage:'全部消息',
        newMessage:'未读消息',
        readMessage:'已读消息',
        flagRead:'标记已读',
        flagAllRead:'全部已读',
        flagAllDel:'全部删除',
        tipsFlagRead:'您确定要标记选中的<%-len%>条消息为已读吗？ ',
        tipsFlagReadAll:'您确定要标记全部消息为已读吗？',
        tipsDel:'您确定要删除选中的<%-len%>条消息吗？',
        tipsDelAll:'您确定要删除全部站内通知吗？',
        tipsNoRead:'您暂时没有未读消息',
        filterGroup:'服务组',
        filterType:"类型",
        //
        back:'返回上级',
        tableTitle:'消息标题',
        tableType:'类型',
        tableTime:'时间',
        tableOprBy:'操作人',
        //
        type:{
            '10':"新版本",'20':"新发布",'30':"新服务",'40':"删除服务",'50':"新成员",'60':"移出成员",'70':"删除组",'80':"解绑bot",'90':"伸缩pod",'100':"调整拓扑",'110':"运行状态"
        }
    },
    inviteWeb:{
        author:'授权',
        authorEnd:'已授权',
        authorStart:'授权用户',
        back:'返回 labeit 平台 ?',
        memo1:'Slack App',
        memo2:'将使用你帐号，',
        memo3:'直至停用它 ',
        tipsAuthor:'你希望给予下列应用访问你帐号的权限？'
    },
    adminArea:{
        serviceGroup:'组 / 组创建人',
        serviceService:'服务',
        serviceDeploy:'最近发布',
        serviceCreateBy:'创建人',
        serviceCreateAt:'创建时间',
        clusterCluster:'集群 / 集群创建人',
        clusterNamespace:'命名空间',
        clusterEnv:'标签',
        clusterCreateBy:'创建人',
        clusterCreateAt:'创建时间',
        menuDataTransfer:'系统设置',
        tipsDataTransfer:'同时数据转移',
        tipsDataTransfering:'数据转移中...',
        tipsStarting:'启动中',
        tipsDataIn:'内嵌',
        tipsDataOut:'外联',
    },
    robot:{
        assessment:'需人工审核',
        auto:'全自动',
        assessmentType:'审核方式',
        deployType:'发布方式',
        autoDeploy:'自动发布'
    }
})