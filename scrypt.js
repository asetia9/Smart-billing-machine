	function cal_s1()
	{
	var a1 = document.getElementById("p_qty").value;//proto Qty;
	var b1 = document.getElementById("io_qty").value;//IOQ (1Yr);
	var c1 = document.getElementById("f_qty").value;//Future Qty (3 Yrs);
	var d1 = document.getElementById("dev_01").value;//Dev Cost;
	var e1 = document.getElementById("pcost_01").value;//Cost/ Item;
	//future cost breakdown row 1;
	var fs1_1 = document.getElementById("f_s1_01").value;
	var ts1_1 = document.getElementById("t_s1_01").value;
	var ps1_1 = document.getElementById("p_s1_01").value;
	//future cost breakdown row 2;
	var fs1_2 = document.getElementById("f_s1_02").value;
	var ts1_2 = document.getElementById("t_s1_02").value;
	var ps1_2 = document.getElementById("p_s1_02").value;
	//future cost breakdown row 3;
	var fs1_3 = document.getElementById("f_s1_03").value;
	var ts1_3 = document.getElementById("t_s1_03").value;
	var ps1_3 = document.getElementById("p_s1_03").value;
	//future cost breakdown row 4;
	var fs1_4 = document.getElementById("f_s1_04").value;
	var ts1_4 = document.getElementById("t_s1_04").value;
	var ps1_4 = document.getElementById("p_s1_04").value;
	//future cost breakdown row 5;
	var fs1_5 = document.getElementById("f_s1_05").value;
	var ts1_5 = document.getElementById("t_s1_05").value;
	var ps1_5 = document.getElementById("p_s1_05").value;
	//calculate total proto cost;
	var f1 = Number(e1) * Number(a1) + Number(d1);
	document.getElementById("tot_01").value = f1;
	//calculate future cost;
	if(Number(b1) >= Number(fs1_1) && Number(b1) <= Number(ts1_1)){
		var cal_futurecost_s1_1 = Number(b1) * Number(ps1_1) + Number(f1);
		   document.getElementById("fc_1yr_01").value = cal_futurecost_s1_1;
		}
	if (Number(b1) >= Number(fs1_2) && Number(b1) <= Number(ts1_2)){
		var cal_futurecost_s1_2 = Number(b1) * Number(ps1_2) + Number(f1);
		   document.getElementById("fc_1yr_01").value = cal_futurecost_s1_2;
		}
	if (Number(b1) >= Number(fs1_3) && Number(b1) <= Number(ts1_3)){
		var cal_futurecost_s1_3 = Number(b1) * Number(ps1_3) + Number(f1);
		   document.getElementById("fc_1yr_01").value = cal_futurecost_s1_3;
		}
	if (Number(b1) >= Number(fs1_4) && Number(b1) <= Number(ts1_4)){
		var cal_futurecost_s1_4 = Number(b1) * Number(ps1_4) + Number(f1);
		   document.getElementById("fc_1yr_01").value = cal_futurecost_s1_4;
		}
	if (Number(b1) >= Number(fs1_5) && Number(b1) <= Number(ts1_5)){
		var cal_futurecost_s1_5 = Number(b1) * Number(ps1_5) + Number(f1);
		   document.getElementById("fc_1yr_01").value = cal_futurecost_s1_5;
		}
	//calculate tax and grand total;
	var g1 = document.getElementById("fc_1yr_01").value;
	var h1 = Number(g1) * 0.18;
	document.getElementById("tax_01").value = h1;
	document.getElementById("gt_01").value = Number(h1) + Number(g1);
	}

function cal_s2()
	{
	var a2 = document.getElementById("p_qty").value;//proto Qty;
	var b2 = document.getElementById("io_qty").value;//IOQ (1Yr);
	var c2 = document.getElementById("f_qty").value;//Future Qty (3 Yrs);
	var d2 = document.getElementById("dev_02").value;//Dev Cost;
	var e2 = document.getElementById("pcost_02").value;//Cost/ Item;
	//future cost breakdown row 1;
	var fs2_1 = document.getElementById("f_s2_01").value;
	var ts2_1 = document.getElementById("t_s2_01").value;
	var ps2_1 = document.getElementById("p_s2_01").value;
	//future cost breakdown row 2;
	var fs2_2 = document.getElementById("f_s2_02").value;
	var ts2_2 = document.getElementById("t_s2_02").value;
	var ps2_2 = document.getElementById("p_s2_02").value;
	//future cost breakdown row 3;
	var fs2_3 = document.getElementById("f_s2_03").value;
	var ts2_3 = document.getElementById("t_s2_03").value;
	var ps2_3 = document.getElementById("p_s2_03").value;
	//future cost breakdown row 4;
	var fs2_4 = document.getElementById("f_s2_04").value;
	var ts2_4 = document.getElementById("t_s2_04").value;
	var ps2_4 = document.getElementById("p_s2_04").value;
	//future cost breakdown row 5;
	var fs2_5 = document.getElementById("f_s2_05").value;
	var ts2_5 = document.getElementById("t_s2_05").value;
	var ps2_5 = document.getElementById("p_s2_05").value;
	//calculate total proto cost;
	var f2 = Number(e2) * Number(a2) + Number(d2);
	document.getElementById("tot_02").value = f2;
	//calculate future cost;
	if(Number(b2) >= Number(fs2_1) && Number(b2) <= Number(ts2_1)){
		var cal_futurecost_s2_1 = Number(b2) * Number(ps2_1) + Number(f2);
		   document.getElementById("fc_1yr_02").value = cal_futurecost_s2_1;
		}
	if (Number(b2) >= Number(fs2_2) && Number(b2) <= Number(ts2_2)){
		var cal_futurecost_s2_2 = Number(b2) * Number(ps2_2) + Number(f2);
		   document.getElementById("fc_1yr_02").value = cal_futurecost_s2_2;
		}
	if (Number(b2) >= Number(fs2_3) && Number(b2) <= Number(ts2_3)){
		var cal_futurecost_s2_3 = Number(b2) * Number(ps2_3) + Number(f2);
		   document.getElementById("fc_1yr_02").value = cal_futurecost_s2_3;
		}
	if (Number(b2) >= Number(fs2_4) && Number(b2) <= Number(ts2_4)){
		var cal_futurecost_s2_4 = Number(b2) * Number(ps2_4) + Number(f2);
		   document.getElementById("fc_1yr_02").value = cal_futurecost_s2_4;
		}
	if (Number(b2) >= Number(fs2_5) && Number(b2) <= Number(ts2_5)){
		var cal_futurecost_s2_5 = Number(b2) * Number(ps2_5) + Number(f2);
		   document.getElementById("fc_1yr_02").value = cal_futurecost_s2_5;
		}
	//calculate tax and grand total;
	var g2 = document.getElementById("fc_1yr_02").value;
	var h2 = Number(g2) * 0.18;
	document.getElementById("tax_02").value = h2;
	document.getElementById("gt_02").value = Number(h2) + Number(g2);
	}

function cal_s3()
	{
	var a3 = document.getElementById("p_qty").value;//proto Qty;
	var b3 = document.getElementById("io_qty").value;//IOQ (1Yr);
	var c3 = document.getElementById("f_qty").value;//Future Qty (3 Yrs);
	var d3 = document.getElementById("dev_03").value;//Dev Cost;
	var e3 = document.getElementById("pcost_03").value;//Cost/ Item;
	//future cost breakdown row 1;
	var fs3_1 = document.getElementById("f_s3_01").value;
	var ts3_1 = document.getElementById("t_s3_01").value;
	var ps3_1 = document.getElementById("p_s3_01").value;
	//future cost breakdown row 2;
	var fs3_2 = document.getElementById("f_s3_02").value;
	var ts3_2 = document.getElementById("t_s3_02").value;
	var ps3_2 = document.getElementById("p_s3_02").value;
	//future cost breakdown row 3;
	var fs3_3 = document.getElementById("f_s3_03").value;
	var ts3_3 = document.getElementById("t_s3_03").value;
	var ps3_3 = document.getElementById("p_s3_03").value;
	//future cost breakdown row 4;
	var fs3_4 = document.getElementById("f_s3_04").value;
	var ts3_4 = document.getElementById("t_s3_04").value;
	var ps3_4 = document.getElementById("p_s3_04").value;
	//future cost breakdown row 5;
	var fs3_5 = document.getElementById("f_s3_05").value;
	var ts3_5 = document.getElementById("t_s3_05").value;
	var ps3_5 = document.getElementById("p_s3_05").value;
	//calculate total proto cost;
	var f3 = Number(e3) * Number(a3) + Number(d3);
	document.getElementById("tot_03").value = f3;
	//calculate future cost;
	if(Number(b3) >= Number(fs3_1) && Number(b3) <= Number(ts3_1)){
		var cal_futurecost_s3_1 = Number(b3) * Number(ps3_1) + Number(f3);
		   document.getElementById("fc_1yr_03").value = cal_futurecost_s3_1;
		}
	if (Number(b3) >= Number(fs3_2) && Number(b3) <= Number(ts3_2)){
		var cal_futurecost_s3_2 = Number(b3) * Number(ps3_2) + Number(f3);
		   document.getElementById("fc_1yr_03").value = cal_futurecost_s3_2;
		}
	if (Number(b3) >= Number(fs3_3) && Number(b3) <= Number(ts3_3)){
		var cal_futurecost_s3_3 = Number(b3) * Number(ps3_3) + Number(f3);
		   document.getElementById("fc_1yr_03").value = cal_futurecost_s3_3;
		}
	if (Number(b3) >= Number(fs3_4) && Number(b3) <= Number(ts3_4)){
		var cal_futurecost_s3_4 = Number(b3) * Number(ps3_4) + Number(f3);
		   document.getElementById("fc_1yr_03").value = cal_futurecost_s3_4;
		}
	if (Number(b3) >= Number(fs3_5) && Number(b3) <= Number(ts3_5)){
		var cal_futurecost_s3_5 = Number(b3) * Number(ps3_5) + Number(f3);
		   document.getElementById("fc_1yr_03").value = cal_futurecost_s3_5;
		}
	//calculate tax and grand total;
	var g3 = document.getElementById("fc_1yr_03").value;
	var h3 = Number(g3) * 0.18;
	document.getElementById("tax_03").value = h3;
	document.getElementById("gt_03").value = Number(h3) + Number(g3);
	}
function cal_s4()
	{
	var a4 = document.getElementById("p_qty").value;//proto Qty;
	var b4 = document.getElementById("io_qty").value;//IOQ (1Yr);
	var c4 = document.getElementById("f_qty").value;//Future Qty (3 Yrs);
	var d4 = document.getElementById("dev_04").value;//Dev Cost;
	var e4 = document.getElementById("pcost_04").value;//Cost/ Item;
	//future cost breakdown row 1;
	var fs4_1 = document.getElementById("f_s4_01").value;
	var ts4_1 = document.getElementById("t_s4_01").value;
	var ps4_1 = document.getElementById("p_s4_01").value;
	//future cost breakdown row 2;
	var fs4_2 = document.getElementById("f_s4_02").value;
	var ts4_2 = document.getElementById("t_s4_02").value;
	var ps4_2 = document.getElementById("p_s4_02").value;
	//future cost breakdown row 3;
	var fs4_3 = document.getElementById("f_s4_03").value;
	var ts4_3 = document.getElementById("t_s4_03").value;
	var ps4_3 = document.getElementById("p_s4_03").value;
	//future cost breakdown row 4;
	var fs4_4 = document.getElementById("f_s4_04").value;
	var ts4_4 = document.getElementById("t_s4_04").value;
	var ps4_4 = document.getElementById("p_s4_04").value;
	//future cost breakdown row 5;
	var fs4_5 = document.getElementById("f_s4_05").value;
	var ts4_5 = document.getElementById("t_s4_05").value;
	var ps4_5 = document.getElementById("p_s4_05").value;
	//calculate total proto cost;
	var f4 = Number(e4) * Number(a4) + Number(d4);
	document.getElementById("tot_04").value = f4;
	//calculate future cost;
	if((Number(b4) >= Number(fs4_1) && Number(b4) <= Number(ts4_1)) || 
		(Number(b4) >= Number(fs4_1) && ts4_1 == "Above")){
		var cal_futurecost_s4_1 = Number(b4) * Number(ps4_1) + Number(f4);
		   document.getElementById("fc_1yr_04").value = cal_futurecost_s4_1;
		}
	if (Number(b4) >= Number(fs4_2) && Number(b4) <= Number(ts4_2)){
		var cal_futurecost_s4_2 = Number(b4) * Number(ps4_2) + Number(f4);
		   document.getElementById("fc_1yr_04").value = cal_futurecost_s4_2;
		}
	if (Number(b4) >= Number(fs4_3) && Number(b4) <= Number(ts4_3)){
		var cal_futurecost_s4_3 = Number(b4) * Number(ps4_3) + Number(f4);
		   document.getElementById("fc_1yr_04").value = cal_futurecost_s4_3;
		}
	if (Number(b4) >= Number(fs4_4) && Number(b4) <= Number(ts4_4)){
		var cal_futurecost_s4_4 = Number(b4) * Number(ps4_4) + Number(f4);
		   document.getElementById("fc_1yr_04").value = cal_futurecost_s4_4;
		}
	if (Number(b4) >= Number(fs4_5) && Number(b4) <= Number(ts4_5)){
		var cal_futurecost_s4_5 = Number(b4) * Number(ps4_5) + Number(f4);
		   document.getElementById("fc_1yr_04").value = cal_futurecost_s4_5;
		}
	//calculate tax and grand total;
	var g4 = document.getElementById("fc_1yr_04").value;
	var h4 = Number(g4) * 0.18;
	document.getElementById("tax_04").value = h4;
	document.getElementById("gt_04").value = Number(h4) + Number(g4);
	}
function cal_min()
	{
	var s1 = document.getElementById("s_01").value;
	var s2 = document.getElementById("s_02").value;
	var s3 = document.getElementById("s_03").value;
	var s4 = document.getElementById("s_04").value;

	var s1_fc = document.getElementById("gt_01").value;
	var s2_fc = document.getElementById("gt_02").value;
	var s3_fc = document.getElementById("gt_03").value;
	var s4_fc = document.getElementById("gt_04").value;
	var u_min = Math.min(s1_fc, s2_fc, s3_fc, s4_fc);
	document.getElementById("one_yr").value = u_min;

	if (u_min == s1_fc) {
		document.getElementById("l_1").value = s1;
	}
	if (u_min == s2_fc) {
		document.getElementById("l_1").value = s2;
	}
	if (u_min == s3_fc) {
		document.getElementById("l_1").value = s3;
	}
	if (u_min == s4_fc) {
		document.getElementById("l_1").value = s4;
	}
}