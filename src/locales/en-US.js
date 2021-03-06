import './moment/en-US.js'

export default ({
    // 全局 : 针对部分按钮或标题
    nextStep:'Next step',
    preStep:'Pre step',
    detail:'Detail',
    setting:'Setting',
    update:'Update',
    more:'More',
    create:'Create',
    newCreate:'New',
    add:'Add',
    mod:'Modify',
    invite:'Invite',
    access:'Access',
    join:'Join',
    leave:'Leave',
    delete:'Delete',
    save:'Save',
    exec:'Exec',
    complete:'Complete',
    copy:'Copy',
    close:'Close',
    cancel:'Cancel',
    confirm:'OK',
    confirmTextPre:'Please input ',
    confirmTextFix:' to confirm.',
    tips:'Tips',
    tipsListToBottom:'No more data.',
    tipsDelete:'Deleted successfully.',
    tipsPost:'Added successfully.',
    tipsSave:'Saved successfully.',
    tipsCreate:'Created successfully',
    tipsCopy:'Copied.',
    tipsGenerate:'Recreated successfully.',
    tipsCopyInvite:'Copied to clipboard',
    tipsItsYou:'you',
    tipsNoAuthority:"Permission denied.",
    tipsNoResource:'Cloud not find resource, please contact the administrator.',
    tipsNoFoundData:'No data, please retry.',
    tipsFaild:'Failed to load.',
    tipsNoAuthorityByAdmin:'No need to set up privilege for administrator.',
    tipsValidMust:'不能为空 - ',
    tipsValidChar:'包含特殊符号 - ',
    tipsValidNum:'必须数字 - ',
    tipsValidAddress:'地址格式错误 - ',
    tipsValidEmail:'邮箱格式错误 - ',
    tipsValidCharOrNum:'只能为字母、数字 - ',
    tipsDifPassword:'密码不一致 - ',
    // 模块内
    login: {
        loginTitle:'Login in',
        loginMemo:'Sign up',
        registerTitle:'Sign up',
        registerMemo:'Sign in',
        "username": "Username",
        "password": 'Password',
        "prepassword": "Confirm Password",
        "login": 'Login',
        "register":'Register'
    },
    services:{
        // index
        services:'Service',
        servicesAdd:'Create service',
        authority:'Service permission',
        authorityMemo:'Permissions: R(access) / W(modify) / X(deploy).',
        groupAdd:'Create group',
        open:"Expand",
        fold:"Collapse",
        downloadYaml:'Download yaml',
        imageMoreButton:'more images',
        firstButton:'First deploy',
        firstCreateImageButton:"Create mannual",
        firstCreateImageTips:"没找到 ？ 手动添加镜像",
        firstMemo1:'There is no image to deploy, please  <%=button%>  or push new image to ladeit as the reference first.',
        firstMemo2:'We recommend to put the request inot CI tool, so it can push the new image to ladeit automatically when you release.',
        // label
        serviceMatch:'Rule',
        serviceGateway:'Gateway',
        serviceStatus:'Current status',
        serviceUrl:'url',
        serviceReleaseStatus:'Deployment status',
        serviceTime:'Duration',
        serviceImage:'Images',
        serviceDeploy:'Deployment',
        serviceAllTime:'Total duration',
        serviceAllTimeMemo:'Duration from the beginning. ',
        serviceDeployNum:'Deployment count',
        serviceImageNum:'Image count',
        serviceActivity:'Latest',
        tipsCompleteAuthority:'Modified successfully.',
        tipsNoTiminal:"No resources in this service.",
        tipsServiceDeploy:'<%-num%> service(s) deploying...',
        // dialog
        addDialog:{
            name:'Service Name',
            cluster:'Cluster',
            namespace:'Namespace'
        },
        heatmapChart:{
            January:'January',
            February:'February',
            March:'March',
            April:'April',
            May:'May',
            June:'June',
            July:'July',
            August:'August',
            September:'September',
            October:'October',
            November:'November',
            December:'December',
            Sunday:'Sunday',
            Monday:'Monday',
            Tuesday:'Tuesday',
            Wednesday:'Wednesday',
            Thursday:'Thursday',
            Friday:'Friday',
            Saturday:'Saturday'
        },
        pipeChart:{
            status1:"Running",
            status2:"Pending",
            status3:"Unknown",
            status4:"Succeeded",
            status5:"Failed"
        },
        // status
        errorStatus:{
            'stop':'Not running yet',
            'upgrade':'Upgrading',
            'running':'Running OK',
            'error':'Some error occured'
        },
        status:{
            '-1':'Not running yet',
            '0':'Running',
            '1':'Canary...',
            '2':'BlueGreen...',
            '3':'A/BTest...',
            '4':'Rolling...',
            '8':'运行失败 en',
        },
        releaseStatus:{
            '0':'Preparing',
            '1':'In serve',
            '2':'Retire',
            '3':'Warning',
        },
        releaseType:{
            '0':'First',
            '1':'Canary',
            '2':'BlueGreen',
            '4':'A/BTest',
            '8':'Rolling',
        },
        // detail
        menuSummary:'Overview',
        menuComponent:'Components',
        menuImage:'Images',
        menuDeployment:'Releases',
        menuTopology:'Topology',
        menuSetting:'Setting',
        //
        events:{
            type:"Type",
            mode:'Mode',
            startTime:'Start time',
            endTime:'End time',
        },
        createCfg:{
            inputAddress:'input url ',
            inputPath:'input path ',
            inputArgs:'input args',
            configDefault:'Default configuration',
            configOld:'Modify configuration',
            configImport:'Import configuration',
            configAuto:'Custom configuration',
            //
            protocol:'protocol',
            path:'path',
            port:'port',
            initialDelaySeconds:'initial delay seconds',
            periodSeconds:'period seconds',
            timeoutSeconds:'timeout seconds',
            successThreshold:'success threshold',
            failureThreshold:'failure threshold',

            replicas:'replicas',
            type:'type',
            name:'name',
            containerPort:'container port',
            servicePort:'service port',
            env:'env',
            command:'cmd',
            args:'args',
            store:'storage',
            tipsMustHost:'HOST must input.',
            tipsMustReplicas:'Replicas must input.',
            tipsMustPorts:'Ports must input.',
            //
            searchByNameAndLabel:'Input name or label to query.',
            setting:'config',
            settingImport:'import config',
            settingHanle:'manual config',
            resetSelect:'reselect',
            tipsHost:'Host must be a domain or an external IP.',
            tipsCandidateFlow:'There is no traffic config for candidate.'
        },
        component:{
            cellType:'Type',
            cellName:'Name',
            cellEnv:'Label',
            cellCreateAt:'Create at',
            cellInfo:'Info',
            envStore:'Storage',
            envResource:'Resource',
            envPodMemo:'Running pods / All pods',
            podTitle:'Pod info',
            podName:'Pod Name',
            podNode:'Node',
            podType:'Type',
            podPath:'Path',
            podPort:'Port',
            podEnv:'Env label',
            containerName:'Container Name',
            containerImage:'Image',
            containerCommand:'CMD',
            containerEnv:'Env label',
        },
        image:{
            now:'InService',
            upgrade:'Upgrade',
            rollback:'Rollback',
            imageTitle:"Image info",
            imageVersion:'Version',
            imageTime:'Create at',
            imagePath:'Image',
            gitTitle:'Git info',
            deployTitle:'Deployment',
            deployName:'Name',
            deployCreateBy:'Operator',
            deployOprChannel:'From',
            deployTime:'Deploy at',
        },
        deploy:{
            nowVersion:'Now',
            category:'Deploy Type',
            podNum:'POD Number',
            labelName:'Name',
            labelType:'Type',
            labelChannel:'From',
            labelCreate:'Create at',
            labelCreateBy:'Creator',
            labelCreateAt:'First deploy at',
            labelWork:'Serve',
            labelStatus:'Status',
            labelWorkStart:'Start at',// 服役时间
            labelWorkEnd:'End at',// 服役结束时间
            labelStartTime:'Start at',// 开始时间
            labelEndTime:'End at',// 结束时间
            status:{
                '1':'Preparing',
                '2':'In serve',
                '3':'Retire',
                '4':'Warning'
            },
            releaseCreateBy:'Operator',
            releaseType:'Operate type',
            releaseDetail:'Detail',
            releaseTime:'Time',
        },
        setting:{
            tokenTitle:'Token',
            tokenCopyButton:'Copy token',
            tokenShowButton:'Show token',
            tokenHideButton:'Hidden',
            tokenGenerateButton:'Recreate token',
            delServiceTitle:'Delete service',
            delServiceButton:'Delete service',
            delServiceTips:'Remove components in k8s at the same time',
            tipsDelToken:'Recreate token?'
        }
    },
    group:{
        group:'Group',
        groupName:'Group name',
        authority:'Service permission',
        authorityMemo:'Permissions: R(access) / W(modify) / X(deploy).',
        // detail
        menuSummary:'Overview',
        menuMember:'Member',
        menuTopology:'Topology',
        menuSetting:'Setting',
        tipsLeave:'Sure to leave?',
        buttonDelete:"Delete group",
        tipsCompleteAuthority:'Modified successfully.',
        setting:{
            infoLabelGroup:'Group name',
            tokenTitle:'Token',
            tokenCopyButton:'Copy token',
            tokenShowButton:'Show token',
            tokenHideButton:'Hidden',
            tokenGenerateButton:'Recreate token',
            slackTitle:'Slack channel',
            slackDelTip:"Sure to disassociate Slack channel( <%-channelName%> )?",
            leaveGroupTitle:'Leave group',
            leaveGroupButton:'Leave group',
            delGroupTitle:'Delete group',
            delGroupButton:'Delete group',
        },
        deleteDialog:{
            memo:'Remove components in k8s at the same time',
        }
    },
    cluster:{
        cluster:'Cluster',
        nouse:'The cluster is not available, please contact the administrator!',
        authority:'Cluster permission',
        authorityMemo:'Permissions: R(access) / W(modify) / X(deploy).',
        clusterAdd:'Import cluster',
        menuSummary: 'Overview',
        menuMember: 'Member',
        menuSetting: 'Setting',
        // tips
        tipsAuthority:'Cluster permission',
        tipsAdd:'Add cluster',
        tipsLeaveCluster:'Sure to leave the cluster?',
        tipsDelClusterMemo:'Cluster cannot be deleted while in use, as those services running: ',
        tipsUpateCluster:'The cluster configuration has been updated!',
        tipsCompleteAuthority:'The cluster configuration has been updated!',
        tipsDelMemo:"Cluster cannot be deleted while in use, as those services running: ",
        // button
        buttonLeave:'Leave cluster',
        buttonDelete:'Remove cluster',
    },
    namespace:{
        namespace:'Namespace',
        nouse:'The namespace is not available, please contact the administrator!',
        export:'Import namespace',
        menuSummary:'Overview',
        menuSetting:'Setting',
        //
        tipsUpdate:'The namespace configuration has been updated!',
        tipsAuthority:'Namespace permission',
        //
        labelNamespce:'Namespace',
        labelEnv:'Label',
        labelResourceLimit:'Resource limits',
        labelResourceRequest:'Resource requests',
        //
        formNamespce:'Namespace',
        formEnv:'Label',
        formLimitCPU:'limit.cpu',
        formLimitMemory:'limit.memory',
        formRequestCPU:'request.cpu',
        formRequestMemory:'request.memory',
        formResourceQuota:'Enable resource quota',
        //
        buttonDelete:'Remove namespace',
        deleteDialog:{
            memo:'Namespace cannot be deleted while in use, as those services running: ',
            warning:'Cautious! It will delete the namespace in the k8s cluster, and the components at the same time.'
        }
    },
    user:{
        profile:'Profile',
        account:'Account',
        application:'Application',
        tipsDeleteTitle:'Logout',
        buttonUpdate:'Update user info',
        //
        labelAvator:'Select avator',
        labelUsername:'User name',
        labelNickname:'Nick name',
        labelEmail:'Email',
        password:'PASSWORD',
        inputPassword:'Enter your current password',
        enterNewPassword:'Enter your new password',
        confirmNewPassword:'Re-enter your new password',
        changePassword:'Change Password',
        // tips
        tipsGroupAdmin:'Group administrator',
        tipsClusterAdmin:'Cluster administrator',
        tipsDelete:'Sure to delete this user?',
        tipsDeleteAuthor:'Delete authorization.',
        tipsAuthorityUsers:'Slack user authorized : ',
        tipsSlackDel:"Slack user（ <%-name%> ）authorization removed. ",
        tipsConfirmSlackDel:"Sure to remove authorization of <%=name%>(slack)?"
    },
    notification:{
        important:'重要',
        common:'一般',
        //
        notification:'Notifications',
        seeAll:'SEE ALL',
        allMessage:'All notifications',
        newMessage:'Unread notifications',
        readMessage:'Read notifications',
        flagRead:'Mark read',
        flagAllRead:'Mark all read',
        flagAllDel:'Remove all',
        tipsFlagRead:'Sure to mark <%-len%> notifications as read?',
        tipsFlagReadAll:'Sure to mark all notifications read?',
        tipsDel:'Sure to delete <%-len%> notifications?',
        tipsDelAll:'Sure to delete all notifications?',
        tipsNoRead:'No notification yet.',
        filterGroup:'Select group ...',
        filterType:"Select type ...",
        //
        back:'Return',
        tableTitle:'Title',
        tableType:'Type',
        tableTime:'Time',
        tableOprBy:'Operator',
        //
        type:{
            '10':"new version",'20':"new deployment",'30':"new service",'40':"delete service",'50':"new member",'60':"remove member",'70':"delete group",'80':"unbind bot",'90':"scaling pod",'100':"topology",'110':"running status"
        }
    },
    inviteWeb:{
        author:'Authorized',
        authorEnd:'Authorized',
        authorStart:'Authorize',
        back:'Back to labeit?',
        memo1:'Slack App',
        memo2:' will use your account ',
        memo3:' until you disable it.',
        tipsAuthor:'Allow the following apps to access your account?'
    },
    adminArea:{
        serviceGroup:'Group / Creator',
        serviceService:'Service',
        serviceDeploy:'Recently deployment',
        serviceCreateBy:'Creator',
        serviceCreateAt:'Create at',
        clusterCluster:'Cluster / Creator',
        clusterNamespace:'Namespace',
        clusterEnv:'Label',
        clusterCreateBy:'Creator',
        clusterCreateAt:'Create at',
        menuDataTransfer:'System settings',
        tipsDataTransfer:'Transfer data',
        tipsDataTransfering:'Transfer...',
        tipsStarting:'Restarting...',
        tipsDataIn:'Embed',
        tipsDataOut:'Remote',
    },
    robot:{
        assessment:'Semiautomatic',
        auto:'Automatic',
        assessmentType:'Get notification',
        deployType:'Deployment type',
        autoDeploy:'Deploy automaticly'
    }
})