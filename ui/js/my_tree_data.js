//var data{{{
var data = {
	//{{{BookMark
	BookMark:{
		name: 'Collection',
		data:{
			//Search{{{
			Search:{
				name: '搜索、百科与词典',
				data:{
					baidu:{ name:'Baidu', url:'http://www.baidu.com', item:1 },
					soso:{ name:'SoSo', url:'http://www.soso.com', item:1 },
					google:{ name:'Google', url:'https://www.google.com', item:1, target:'_blank' },
					GouGou:{ name:'GouGou', url:'http://www.gougou.com/', item:1 },
					Wikipedia:{ name:'Wikipedia', url:'http://www.wikipedia.org/', item:1 }
				}
			},
			//}}}
			//Video{{{
			Video:{
				name: '视频',
				data:{
					Youku:{ name:'优酷', url:'http://www.youku.com', item:1 },
					PPS:{ name:'PPS', url:'http://www.pps.tv', item:1 },
					Tudou:{ name:'土豆', url:'http://www.tudou.com/', item:1 },
					'163':{ name:'网易视频', url:'http://v.163.com/', item:1 },
					Xunlei:{ name:'迅雷视频', url:'http://www.xunlei.com/', item:1 },
					FengYun:{ name:'风云直播', url:'http://www.fengyunzhibo.com/', item:1 }
				}
			},
			//}}}
			//WebSite{{{
			WebSite:{
				name: '门户、新闻与社区',
				data:{
					Youku:{ name:'网易', url:'http://www.163.com', item:1 },
					Sina:{ name:'新浪', url:'http://www.sina.com', item:1 },
					sohu:{ name:'搜狐', url:'http://www.sohu.com/', item:1 },
					QQ:{ name:'腾讯', url:'http://www.qq.com/', item:1 },
					Xinhua:{ name:'新华网', url:'http://www.xinhuanet.com/', item:1 }
				}
			},
			//}}}
			//Blog{{{
			Blog:{
				name: '个人博客、社区',
				data:{
					Cnblogs:{ name:'博客园', url:'http://www.cnblogs.com', item:1 },
					DaQianDuan:{ name:'大前端', url:'http://www.daqianduan.com/', item:1 },
					'36KR':{ name:'36kr', url:'http://www.36kr.com/', item:1 },
					LampBlog:{ name:'Lamp Blog', url:'http://www.lampblog.net/ubuntu/find%E5%91%BD%E4%BB%A4/', item:1 },
					CoolShell:{ name:'酷壳', url:'http://coolshell.cn/', item:1 },
					DivCss:{ name:'DivCSS', url:'http://www.divcss5.com/', item:1 },
					W3cplus:{ name:'w3cplus', url:'http://www.w3cplus.com/', item:1 },
					Berlinix:{ name:'berlinix', url:'http://www.berlinix.com/', item:1 },
					'51CTO':{ name:'51CTO', url:'http://www.51cto.com', item:1 },
					PanWeiZeng:{ name:'潘魏增', url:'http://panweizeng.com', item:1 },
					Zihou:{ name:'子猴博客', url:'http://www.zihou.me', item:1 },
					'Typeof':{ name:'Typeof', url:'http://typeof.net', item:1 },
					'Heroin':{ name:'Heroin', url:'http://heroin.so', item:1 },
					CSSASS:{ name:'CSSASS', url:'http://www.cssass.com/blog/', item:1 },
					IBMCN:{ name:'IBM-CN', url:'https://www.ibm.com/developerworks/cn/', item:1 },
					Soboom:{ name:'Soboom', url:'http://www.soboom.com/index.html', item:1 },
					ZhangXinXu:{ name:'张鑫旭', url:'http://www.zhangxinxu.com', item:1 },
					Sivan:{ name:'Sivan&#039;s Blog', url:'http://lightcss.com/', item:1 },
					Moon:{ name:'月光博客', url:'http://www.williamlong.info/', item:1 },
					Ruanyifeng:{ name:'阮一峰', url:'http://www.ruanyifeng.com/blog/', item:1, target:"_blank" },
					Front:{ name:'前端观察', url:'http://www.qianduan.net/', item:1 },
					Webrebuild:{ name:'webrebuild', url:'http://www.webrebuild.org/', item:1 },
					Blueidea:{ name:'蓝色梦想', url:'http://www.blueidea.com/', item:1 },
					JueYing:{ name:'绝影', url:'http://blog.csdn.net/hitetoshi/', item:1 },
					DGua:{ name:'D瓜哥', url:'http://www.cnblogs.com/diguage/', item:1 },
					'Html580':{ name:'HTML580', url:'http://www.html580.com/', item:1 },
					'v_JULY_v':{ name:'v_JULY_v', url:'http://blog.csdn.net/v_JULY_v', item:1 }
				}
			},
			//}}}
			//BlogNewTech{{{
			BlogNewTech:{
				name: '团队博客',
				data:{
					QQ:{
						name: '腾讯',
						data:{
							Client:{ name:'QQ客户端团队博客', url:'http://impd.tencent.com/', item:1 },
							FrontTeam:{ name:'腾讯Web前端 AlloyTeam', url:'http://www.alloyteam.com/', item:1 },
							Game:{ name:'TGideas游戏设计', url:'http://tgideas.qq.com/', item:1 },
							WSD:{ name:'WSD 用户体验', url:'http://mxd.tencent.com/', item:1 },
							ECD:{ name:'ECD电商用户体验', url:'http://ecd.tencent.com/', item:1 },
							CDC:{ name:'CDC用户研究与体验设计中心', url:'http://cdc.tencent.com/', item:1 },
							ISUX:{ name:'ISUX社交用户体验设计部', url:'http://isux.tencent.com/blog', item:1 }
						}
					},
					TaoBao:{
						name: '淘宝',
						data:{
							UED:{ name:'淘宝UED', url:'http://ued.taobao.com/', item:1 },
							QA:{ name:'淘宝QA', url:'http://rdc.taobao.com/blog/qa/', item:1 },
							Test:{ name:'淘测试', url:'http://www.taobaotest.com/', item:1 },
							DBA:{ name:'淘宝DBA', url:'http://www.taobaodba.com/', item:1 },
							JM:{ name:'淘宝JAVA中间件', url:'http://rdc.taobao.com/team/jm/', item:1 },
							CORE:{ name:'淘宝核心技术团队', url:'http://rdc.taobao.com/blog/cs/', item:1 },
							ISUX:{ name:'淘宝搜索技术团队', url:'http://www.searchtb.com/', item:1 },
							UX:{ name:'一淘UX', url:'http://ux.etao.com/', item:1 }
						}
					},
					Alibaba:{
						name: '阿里巴巴',
						data:{
							UED_Inter:{ name:'阿里巴巴国际站UED', url:'http://www.aliued.com/', item:1 },
							UED_CN:{ name:'阿里巴巴中文站UED', url:'http://www.aliued.cn/', item:1 },
							Data:{ name:'阿里集团数据平台', url:'http://www.alidata.org/', item:1 }
						}
					},
					AliPay:{
						name: '支付宝',
						data:{
							PED:{ name:'支付宝PED', url:'http://ped.alipay.com/', item:1 },
							UED:{ name:'支付宝UED', url:'http://ued.alipay.com/', item:1 },
							User_search:{ name:'支付宝用户研究', url:'http://ued.alipay.com/ur', item:1 }
						}
					},
					Sohu:{
						name: '搜狐',
						data:{
							MUED:{ name:'搜狐MUED', url:'http://mued.sohu.com/', item:1 },
							FocusUED:{ name:'搜狐焦点UED', url:'http://ued.focus.cn/wordpress/', item:1 },
							UED:{ name:'搜狐UED', url:'http://ued.sohu.com/', item:1 }
						}
					},
					Baidu:{
						name: '百度',
						data:{
							MUX:{ name:'百度MUX', url:'http://mux.baidu.com/', item:1 },
							UFO:{ name:'百度UFO', url:'http://www.baiduux.com/', item:1 },
							UED:{ name:'百度UED', url:'http://ued.baidu.com/', item:1 }
						}
					},
					Sina:{
						name: '新浪',
						data:{
							UDC:{ name:'新浪微博UDC', url:'http://udc.weibo.com/', item:1 },
							UED:{ name:'新浪UED', url:'http://ued.sina.com/', item:1 }
						}
					},
					Ctrip:{ name:'携程UED', url:'http://ued.ctrip.com/', item:1 },
					RenRen:{ name:'人人FED', url:'http://fed.renren.com/', item:1 },
					WangYi:{ name:'网易UEDC', url:'http://uedc.163.com/', item:1 },
					QiHu:{ name:'奇虎75Team', url:'http://www.75team.com/', item:1 },
					SoGou:{ name:'搜狗UED', url:'http://ued.sogou.com/', item:1 },
					Floor19:{ name:'19楼UED', url:'http://blog.19ued.com/', item:1 }
				}
			},
			//}}}
			//Software{{{
			Software:{
				name: '软件',
				data:{
					Vim:{ name:'Vim', url:'http://www.vim.org', item:1 },
					Vim2:{ name:'Vim2', url:'http://vim.wendal.net/', item:1 },
					Gimp:{ name:'GIMP', url:'http://www.gimp.org', item:1 },
					PHP:{ name:'PHP', url:'http://www.php.net', item:1 },
					Scala:{ name:'Scala', url:'http://www.scala-lang.org', item:1 },
					Fiddler:{ name:'Fiddler', url:'http://www.fiddler2.com/fiddler2/', item:1 },
					BitBucket:{ name:'BitBucket', url:'https://bitbucket.org/', item:1 },
					System:{
						name: '系统软件',
						data:{
							Driver:{ name:'驱动精灵', url:'http://www.drivergenius.com', item:1 },
							DiskGenius:{ name:'DiskGenius', url:'http://www.diskgenius.cn/', item:1 }
						}
					},
					Code_manage:{
						name: '版本管理',
						data:{
							Git:{ name:'Git', url:'http://msysgit.github.com/', item:1 },
							Github:{ name:'Github', url:'http://windows.github.com/', item:1 },
							TortoiseSVN:{ name:'TortoiseSVN', url:'http://tortoisesvn.net/', item:1 },
							Win32SVN:{ name:'Win32SVN', url:'http://subversion.apache.org/packages.html#windows', item:1 }
						}
					}
				}
			},
			//}}}
			//Tools{{{
			Tools:{
				name: '小工具',
				data:{
					Emmet:{ name:'Emmet', url:'http://docs.emmet.io/', item:1 },
					Less:{ name:'Less', url:'https://github.com/groenewege/vim-less', item:1, target:'_blank' },
					VimZenCoding :{ name:'Vim Zencoding', url:'https://github.com/mattn/zencoding-vim', item:1, target:'_blank' },
					Linr:{ name:'Linr', url:'http://hi.baidu.com/vickeychen', item:1 },
					Figure:{ name:'HTML5轮廓工具', url:'http://gsnedders.html5.org/', item:1 },
					Trello:{ name:'Trello', url:'https://trello.com', item:1 },
					YouDaoNote:{ name:'有道笔记', url:'https://note.youdao.com', item:1 }
				}
			},
			//}}}
			//Tech{{{
			Tech:{
				name: 'Tech',
				data:{
					SAE:{ name:'SinaAppEngine', url:'http://sae.sina.com.cn/', item:1 },
					MSDN:{ name:'MSDN', url:'http://msdn.microsoft.com/en-us/library/ms683218%28VS.85%29.aspx', item:1 },
					GoogleDev:{ name:'Google Developers', url:'https://developers.google.com/academy/apis/commerce/?hl=zh-cn', item:1, target:'_blank' },
					GoogleAna:{ name:'谷歌流量分析', url:'https://www.google.com/analytics/web/?hl=zh-CN', item:1, target:'_blank' },
					JavaDoc:{ name:'Java document', url:'http://docs.oracle.com/javase/6/docs/api/overview-summary.html', item:1 },
					Codeplex:{ name:'Codeplex', url:'http://www.codeplex.com/', item:1 }
				}
			}
			//}}}
		}
	},
	//}}}
	//{{{JavaScript
	JavaScript:{
		name:'JavaScript',
		data:{
			application:{
				name: '应用',
				data: {
					JQuery:{ name: 'JQuery', url: 'http://jquery.com/', item: 1 },
					Underscore:{ name: 'Underscore', url: 'https://github.com/documentcloud/underscore/', item: 1 },
					Backbone:{ name: 'Backbone', url: 'https://github.com/documentcloud/backbone/', item: 1 },
					SeaJs:{ name: 'seajs', url: 'http://seajs.org/', item: 1 },
					Qwrap:{ name: 'Qwrap', url: 'http://qwrap.com/', item: 1 },
					WindJS:{ name: 'WindJS', url: 'http://windjs.org/cn/', item: 1 },
					Impress:{ name: 'Impress', url: 'http://bartaz.github.io/impress.js/#/bored', item: 1 },
					MessengerJS:{ name: 'MessengerJS', url: 'http://biqing.github.io/MessengerJS/', item: 1 }
				}
			},
			Blog:{
				name: 'Share',
				data: {
					Huangzhilong:{ name:'Dron', url:'http://ucren.com/blog/', item:1 },
					Franky:{ name: 'Franky', url: 'http://www.cnblogs.com/_franky', item: 1 },
					Rubylouvre:{ name: '司徒正美', url: 'http://www.cnblogs.com/rubylouvre', item: 1 },
					Otakustay:{ name: 'Gray Zhang', url: 'http://otakustay.com/', item: 1 },
					JKisJK:{ name: 'JKisJK', url: 'http://www.cnblogs.com/jkisjk', item: 1 },
					CloudGamer:{ name: 'cloudgamer', url: 'http://www.cnblogs.com/cloudgamer/', item: 1 }
				}
			}
		}
	},
	//}}}
	//{{{NodeJS
	NodeJS:{
		name:'NodeJS',
		data:{
			application:{
				name: '应用',
				data: {
					Curl:{ name: 'Curl', url: 'https://github.com/cujojs/curl', item: 1, target:"_blank" }
				}
			},
			Blog:{
				name: 'Share',
				data: {
					NodeJS:{ name: 'NodeJS官网', url: 'http://nodejs.org/', item: 1 }
				}
			}
		}
	},
	//}}}
	//{{{C&Cpp
	C_CPP:{
		name:'C&Cpp',
		data:{
			Share:{
				name: 'Share',
				data: {
					NodeJS:{ name: '一分C++文档', url: 'http://classfoo.cn/foo/c++', item: 1 }
				}
			}
		}
	},
	//}}}
	//UI{{{
	UI:{
		name:'UI',
		data:{
			popup:{ name: 'popup', url: './ui/bundle/popup/popup.html', item: 1 }
		}
	}
	//}}}
};
///}}}
/* vim: set fdm=marker : */
