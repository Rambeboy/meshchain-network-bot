const _0x233e73=_0xe797;(function(_0x588f6a,_0x8f7305){const _0x32b2cb=_0xe797,_0x102aa2=_0x588f6a();while(!![]){try{const _0x427822=-parseInt(_0x32b2cb(0x15f))/0x1*(parseInt(_0x32b2cb(0x166))/0x2)+parseInt(_0x32b2cb(0x162))/0x3*(-parseInt(_0x32b2cb(0x185))/0x4)+-parseInt(_0x32b2cb(0x160))/0x5*(parseInt(_0x32b2cb(0x179))/0x6)+-parseInt(_0x32b2cb(0x183))/0x7+-parseInt(_0x32b2cb(0x17a))/0x8+parseInt(_0x32b2cb(0x16a))/0x9*(parseInt(_0x32b2cb(0x184))/0xa)+-parseInt(_0x32b2cb(0x161))/0xb*(-parseInt(_0x32b2cb(0x164))/0xc);if(_0x427822===_0x8f7305)break;else _0x102aa2['push'](_0x102aa2['shift']());}catch(_0x20c797){_0x102aa2['push'](_0x102aa2['shift']());}}}(_0x1bef,0x76eec));import{coday,estimate,claim,start,info}from'./src/core/scripts.js';import{logger}from'./src/utils/logger.js';import _0x52fab5 from'fs/promises';import{banner}from'./src/utils/helper.js';function _0xe797(_0x551814,_0x567ee0){const _0x1bef74=_0x1bef();return _0xe797=function(_0xe797d3,_0x38cbe8){_0xe797d3=_0xe797d3-0x15f;let _0x234671=_0x1bef74[_0xe797d3];return _0x234671;},_0xe797(_0x551814,_0x567ee0);}let headers={'Content-Type':_0x233e73(0x168)};async function readTokensAndIds(){const _0x28093a=_0x233e73;try{const _0x23d428=await _0x52fab5[_0x28093a(0x173)](_0x28093a(0x16d),_0x28093a(0x188)),_0x8eed6=_0x23d428[_0x28093a(0x171)]('\x0a')['filter'](_0x3ae9de=>_0x3ae9de[_0x28093a(0x172)]()),_0x2eb2aa=await _0x52fab5['readFile']('unique_id.txt','utf-8'),_0x290f7f=_0x2eb2aa[_0x28093a(0x171)]('\x0a')[_0x28093a(0x170)](_0x4914b3=>_0x4914b3['trim']());if(_0x8eed6[_0x28093a(0x178)]!==_0x290f7f['length'])return logger(_0x28093a(0x16f),_0x28093a(0x174)),[];const _0x6473e=_0x8eed6[_0x28093a(0x18b)]((_0x3f1233,_0x2d0602)=>{const _0x2f0a8b=_0x28093a,[_0xb3d39a,_0x4488dd]=_0x3f1233['split']('|')[_0x2f0a8b(0x18b)](_0x46268d=>_0x46268d[_0x2f0a8b(0x172)]()),_0x180302=_0x290f7f[_0x2d0602]['split']('|')[_0x2f0a8b(0x18b)](_0x477d86=>_0x477d86[_0x2f0a8b(0x172)]());return{'access_token':_0xb3d39a,'refresh_token':_0x4488dd,'unique_ids':_0x180302};});return _0x6473e;}catch(_0x3b8570){return logger(_0x28093a(0x163),'error',_0x3b8570['message']),[];}}async function refreshToken(_0x2aac53,_0x28ed4b){const _0x37c608=_0x233e73;logger('Refreshing\x20access\x20token\x20for\x20Account\x20'+(_0x28ed4b+0x1)+'...',_0x37c608(0x186));const _0x48fd66={'refresh_token':_0x2aac53},_0x1f914f=await coday(_0x37c608(0x175),'POST',headers,_0x48fd66);if(_0x1f914f&&_0x1f914f['access_token']){const _0x26af90=(await _0x52fab5[_0x37c608(0x173)](_0x37c608(0x16d),'utf-8'))['split']('\x0a');return _0x26af90[_0x28ed4b]=_0x1f914f[_0x37c608(0x167)]+'|'+_0x1f914f[_0x37c608(0x17b)],await _0x52fab5[_0x37c608(0x16c)]('token.txt',_0x26af90['join']('\x0a'),_0x37c608(0x188)),logger(_0x37c608(0x18a)+(_0x28ed4b+0x1)+_0x37c608(0x189),_0x37c608(0x181)),_0x1f914f[_0x37c608(0x167)];}return logger(_0x37c608(0x18a)+(_0x28ed4b+0x1)+_0x37c608(0x17c),_0x37c608(0x174)),null;}async function processAccount({access_token:_0x3a2cbb,refresh_token:_0x231488,unique_ids:_0x26920d},_0x882c2b){const _0x10b37a=_0x233e73;headers={...headers,'Authorization':'Bearer\x20'+_0x3a2cbb};for(const _0x285666 of _0x26920d){const _0x481f0b=await info(_0x285666,headers);if(_0x481f0b[_0x10b37a(0x174)]){logger(_0x10b37a(0x18a)+(_0x882c2b+0x1)+_0x10b37a(0x187)+_0x285666+_0x10b37a(0x177),_0x10b37a(0x174));const _0x38d97a=await refreshToken(_0x231488,_0x882c2b);if(!_0x38d97a)return;headers[_0x10b37a(0x169)]='Bearer\x20'+_0x38d97a;}else{const {name:_0x49f66b,total_reward:_0x29e759}=_0x481f0b;logger(_0x10b37a(0x18a)+(_0x882c2b+0x1)+_0x10b37a(0x187)+_0x285666+':\x20'+_0x49f66b+_0x10b37a(0x16b)+_0x29e759,_0x10b37a(0x181));}const _0x3c5de3=await estimate(_0x285666,headers);if(!_0x3c5de3){logger(_0x10b37a(0x18a)+(_0x882c2b+0x1)+_0x10b37a(0x187)+_0x285666+_0x10b37a(0x17f),_0x10b37a(0x174));continue;}if(_0x3c5de3[_0x10b37a(0x180)]>0xa){logger(_0x10b37a(0x18a)+(_0x882c2b+0x1)+_0x10b37a(0x187)+_0x285666+_0x10b37a(0x176));const _0x3a7350=await claim(_0x285666,headers);_0x3a7350?(logger(_0x10b37a(0x18a)+(_0x882c2b+0x1)+_0x10b37a(0x187)+_0x285666+_0x10b37a(0x17e)+_0x3a7350,'success'),await start(_0x285666,headers),logger(_0x10b37a(0x18a)+(_0x882c2b+0x1)+_0x10b37a(0x187)+_0x285666+_0x10b37a(0x165),'info')):logger('Account\x20'+(_0x882c2b+0x1)+_0x10b37a(0x187)+_0x285666+':\x20Failed\x20to\x20claim\x20reward.',_0x10b37a(0x174));}else logger(_0x10b37a(0x18a)+(_0x882c2b+0x1)+_0x10b37a(0x187)+_0x285666+':\x20Mine\x20already\x20started.\x20Mine\x20value:\x20'+_0x3c5de3['value'],'info');}}async function main(){const _0x391912=_0x233e73;logger(banner,_0x391912(0x16e));while(!![]){const _0xfbb3c7=await readTokensAndIds();if(_0xfbb3c7[_0x391912(0x178)]===0x0){logger(_0x391912(0x182),_0x391912(0x174));return;}for(let _0x17bc5d=0x0;_0x17bc5d<_0xfbb3c7['length'];_0x17bc5d++){const _0x38a668=_0xfbb3c7[_0x17bc5d];logger(_0x391912(0x18c)+(_0x17bc5d+0x1)+_0x391912(0x17d),'info'),await processAccount(_0x38a668,_0x17bc5d);}await new Promise(_0x4a1f45=>setTimeout(_0x4a1f45,0xea60));}}main();function _0x1bef(){const _0x4899de=['split','trim','readFile','error','https://api.meshchain.ai/meshmain/auth/refresh-token',':\x20Attempting\x20to\x20claim\x20reward...',':\x20Profile\x20fetch\x20failed,\x20attempting\x20to\x20refresh\x20token...','length','2661072PKPQkt','4450696OiylEo','refresh_token','\x20failed\x20to\x20refresh\x20token','...',':\x20Claim\x20successful!\x20New\x20Balance:\x20',':\x20Failed\x20to\x20fetch\x20estimate.','value','success','No\x20accounts\x20to\x20process.','2210054umlaoj','2824180iNQsJF','12252UfReos','info','\x20|\x20','utf-8','\x20token\x20refreshed\x20successfully','Account\x20','map','Processing\x20Account\x20','1279FAJYQs','5zMCawG','18045599EjoDDK','111cZsvlz','Failed\x20to\x20read\x20token\x20or\x20unique\x20ID\x20file:','12RoZcpD',':\x20Started\x20mining\x20again.','894IrPmQu','access_token','application/json','Authorization','27lMDyGF','\x20|\x20Balance:\x20','writeFile','token.txt','debug','Mismatch\x20between\x20the\x20number\x20of\x20tokens\x20and\x20unique\x20ID\x20lines.','filter'];_0x1bef=function(){return _0x4899de;};return _0x1bef();}