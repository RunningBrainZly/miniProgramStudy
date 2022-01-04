Page({

  /**
   * 页面的初始数据
   */
  data: {
    // test:'<div class="refactor-login-modal-body"><!-- BD/SEM渠道 显示下面标题 --><div class="refactor-login-modal-title">3秒登录 即可下载</div><div class="refactor-login-modal-form-item form-item-phone error"><i></i><input type="text" maxlength="11" placeholder="请输入您的手机号" id="refactor-phone-input"><span>不能为空</span></div><div class="refactor-login-modal-form-item-inline"><div class="refactor-login-modal-form-item form-item-code"><i></i><input type="text" maxlength="6" placeholder="请输入动态密码" id="refactor-code-input"><span></span></div><button id="refactor-code-click" class="refactor-login-modal-form-btn form-btn-receive ibaotu-md-click" ibaotu-md-name="pop_up" ibaotu-md-value="new_captcha" disabled="">获取验证码</button></div><div class="refactor-login-modal-form-item-inline"><label class="form-item-checkin"><input type="checkbox" id="remember" checked=""><i></i><span>15天免登录</span></label><p class="form-text-warn"></p></div><button class="refactor-login-modal-form-btn form-btn-login ibaotu-md-click" id="refactor-login-btn" ibaotu-md-name="pop_up" ibaotu-md-value="new_phone_dl" disabled="">登录/注册</button><div class="form-text-around-line"><i></i><span>其他登录方式</span><i></i></div><div class="form-item-method-list"><a class="form-item-method-item form-item-method-wx btn-social-login-item" rel="nofollow" href="//ibaotu.com/?m=login&amp;a=snsLogin&amp;type=weixin&amp;pagecode=1001&amp;pagetype=1" wx-login-md="office_account" ibaotu-md-name="pop_up" ibaotu-md-value="new_wx"><p><i class="iconfont icon-weixin"></i></p><span>微信登录</span></a><a class="form-item-method-item form-item-method-qq btn-social-login-item" rel="nofollow" href="//ibaotu.com/?m=login&amp;a=snsLogin&amp;type=qq&amp;pagecode=1001&amp;pagetype=1" ibaotu-md-name="pop_up" ibaotu-md-value="new_qq"><p><i class="iconfont icon-qq"></i></p><span>QQ登录</span></a></div></div>'
    html:[
      {
        name:"div",
        attrs:{
          class:"my_div",
          style:"color:red;"
        },
        children:[
          {
            name:"p",
            attrs:{},
            children:[
              {
                type:"text",
                text:"hello"
              }
            ]
          }
        ]
      },
    ]
  },
})