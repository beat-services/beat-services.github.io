import{S as R,o as H,a as L,s as o,b as Y,g as h,U as u,c as _,d as N,e as q,f as F,h as K,i as M,j as U,k as A,l as B,E as C,H as Z,m as z,r as G,n as J,p as O,q as Q,t as S,u as D,v as j}from"./CaXlIQXs.js";function w(i,T=null,y){if(typeof i!="object"||i===null||R in i)return i;const l=K(i);if(l!==H&&l!==L)return i;var s=new Map,v=M(i),b=o(0);v&&s.set("length",o(i.length));var c;return new Proxy(i,{defineProperty(a,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&F();var f=s.get(e);return f===void 0?(f=o(t.value),s.set(e,f)):_(f,w(t.value,c)),!0},deleteProperty(a,e){var t=s.get(e);if(t===void 0)e in a&&s.set(e,o(u));else{if(v&&typeof e=="string"){var f=s.get("length"),n=Number(e);Number.isInteger(n)&&n<f.v&&_(f,n)}_(t,u),k(b)}return!0},get(a,e,t){var g;if(e===R)return i;var f=s.get(e),n=e in a;if(f===void 0&&(!n||(g=N(a,e))!=null&&g.writable)&&(f=o(w(n?a[e]:u,c)),s.set(e,f)),f!==void 0){var r=h(f);return r===u?void 0:r}return Reflect.get(a,e,t)},getOwnPropertyDescriptor(a,e){var t=Reflect.getOwnPropertyDescriptor(a,e);if(t&&"value"in t){var f=s.get(e);f&&(t.value=h(f))}else if(t===void 0){var n=s.get(e),r=n==null?void 0:n.v;if(n!==void 0&&r!==u)return{enumerable:!0,configurable:!0,value:r,writable:!0}}return t},has(a,e){var r;if(e===R)return!0;var t=s.get(e),f=t!==void 0&&t.v!==u||Reflect.has(a,e);if(t!==void 0||q!==null&&(!f||(r=N(a,e))!=null&&r.writable)){t===void 0&&(t=o(f?w(a[e],c):u),s.set(e,t));var n=h(t);if(n===u)return!1}return f},set(a,e,t,f){var P;var n=s.get(e),r=e in a;if(v&&e==="length")for(var g=t;g<n.v;g+=1){var m=s.get(g+"");m!==void 0?_(m,u):g in a&&(m=o(u),s.set(g+"",m))}n===void 0?(!r||(P=N(a,e))!=null&&P.writable)&&(n=o(void 0),_(n,w(t,c)),s.set(e,n)):(r=n.v!==u,_(n,w(t,c)));var d=Reflect.getOwnPropertyDescriptor(a,e);if(d!=null&&d.set&&d.set.call(f,t),!r){if(v&&typeof e=="string"){var E=s.get("length"),I=Number(e);Number.isInteger(I)&&I>=E.v&&_(E,I+1)}k(b)}return!0},ownKeys(a){h(b);var e=Reflect.ownKeys(a).filter(n=>{var r=s.get(n);return r===void 0||r.v!==u});for(var[t,f]of s)f.v!==u&&!(t in a)&&e.push(t);return e},setPrototypeOf(){Y()}})}function k(i,T=1){_(i,i.v+T)}function W(i,T,[y,l]=[0,0]){A&&y===0&&B();var s=i,v=null,b=null,c=u,a=y>0?C:0,e=!1;const t=(n,r=!0)=>{e=!0,f(r,n)},f=(n,r)=>{if(c===(c=n))return;let g=!1;if(A&&l!==-1){if(y===0){const d=s.data;d===Z?l=0:d===z?l=1/0:(l=parseInt(d.substring(1)),l!==l&&(l=c?1/0:-1))}const m=l>y;!!c===m&&(s=G(),J(s),O(!1),g=!0,l=-1)}c?(v?S(v):r&&(v=D(()=>r(s))),b&&j(b,()=>{b=null})):(b?S(b):r&&(b=D(()=>r(s,[y+1,l]))),v&&j(v,()=>{v=null})),g&&O(!0)};U(()=>{e=!1,T(t),e||f(null,null)},a),A&&(s=Q)}export{W as i,w as p};
