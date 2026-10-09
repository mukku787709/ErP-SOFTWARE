export type Item={id:string;name:string;sku:string;category:string;unit:string;quantity:number;reorder:number;cost:number;location:string};
export type Worker={id:string;name:string;role:string;department:string;shift:string};
export type Customer={id:string;name:string;contact:string;email:string;phone:string;status:string};
export type Order={id:string;customer:string;product:string;quantity:number;due:string;status:string;value:number};
export type Attendance={id:string;worker_id:string;date:string;check_in:string|null;check_out:string|null;status:string};
export type Movement={id:string;item_id:string;quantity:number;note:string;created_at:string};
export type Data={inventory:Item[];workers:Worker[];customers:Customer[];orders:Order[];attendance:Attendance[];movements:Movement[]};
export const blank:Data={inventory:[],workers:[],customers:[],orders:[],attendance:[],movements:[]};
export const today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
export const demoItems:Item[]=[
{id:'demo-i1',name:'Steel sheets',sku:'RM-001',category:'Raw material',unit:'kg',quantity:120,reorder:200,cost:85,location:'Warehouse A'},
{id:'demo-i2',name:'Aluminium rods',sku:'RM-002',category:'Raw material',unit:'kg',quantity:840,reorder:300,cost:245,location:'Warehouse A'},
{id:'demo-i3',name:'M8 bolts',sku:'CP-003',category:'Component',unit:'pcs',quantity:450,reorder:1000,cost:6,location:'Store B'},
{id:'demo-i4',name:'Industrial paint',sku:'CS-004',category:'Consumable',unit:'L',quantity:24,reorder:50,cost:480,location:'Store B'},
{id:'demo-i5',name:'Precision housings',sku:'FG-005',category:'Finished goods',unit:'pcs',quantity:380,reorder:100,cost:1250,location:'Dispatch'},
{id:'demo-i6',name:'Shaft assemblies',sku:'FG-006',category:'Finished goods',unit:'pcs',quantity:240,reorder:80,cost:1800,location:'Dispatch'},
{id:'demo-i7',name:'Rubber seals',sku:'CP-007',category:'Component',unit:'pcs',quantity:3500,reorder:1000,cost:18,location:'Store B'},
{id:'demo-i8',name:'Cutting oil',sku:'CS-008',category:'Consumable',unit:'L',quantity:180,reorder:60,cost:270,location:'Store B'}];
export const demoWorkers:Worker[]=[['Arjun Kumar','Machine operator','Machining'],['Priya Sharma','Quality inspector','Quality'],['Ravi Patel','Assembly technician','Assembly'],['Sunita Devi','Packing associate','Dispatch'],['Vikram Singh','Machine operator','Machining'],['Meena Rao','Storekeeper','Inventory'],['Amit Verma','Welder','Fabrication'],['Neha Gupta','Production supervisor','Production']].map((r,i)=>({id:'demo-w'+i,name:r[0],role:r[1],department:r[2],shift:'Day shift'}));
export const demoCustomers:Customer[]=[['Apex Industries','Rohan Mehta','rohan@example.com'],['Meridian Engineering','Anita Shah','anita@example.com'],['Nova Components','Karan Rao','karan@example.com'],['Orion Manufacturing','Deepa Joshi','deepa@example.com']].map((r,i)=>({id:'demo-c'+i,name:r[0],contact:r[1],email:r[2],phone:'',status:i===3?'Lead':'Active'}));
export const demoOrders:Order[]=[{id:'WO-1001',customer:'Apex Industries',product:'Precision housings',quantity:500,due:'2026-10-15',status:'In progress',value:625000},{id:'WO-1002',customer:'Meridian Engineering',product:'Steel brackets',quantity:1200,due:'2026-10-18',status:'Planned',value:216000},{id:'WO-1003',customer:'Nova Components',product:'Shaft assemblies',quantity:300,due:'2026-10-12',status:'Quality check',value:540000},{id:'WO-1004',customer:'Apex Industries',product:'Mounting plates',quantity:800,due:'2026-10-22',status:'In progress',value:320000},{id:'WO-1005',customer:'Meridian Engineering',product:'Valve bodies',quantity:200,due:'2026-10-25',status:'Planned',value:280000}];
export const stages=['Planned','In progress','Quality check','Ready to dispatch','Completed'];
