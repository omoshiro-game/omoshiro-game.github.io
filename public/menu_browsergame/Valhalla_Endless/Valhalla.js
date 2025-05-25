







var NO_MEAN		=	0;
var FALSE		=	0;
var TRUE		=	1;
var NUMBER_MAX		=	4503599627370496;	


var GT_TRUE		=	0;		
var GT_TEST		=	1;		
var GT_TEST2		=	2;		
var GT_TEST3		=	3;		
var GAME_TEST		=	GT_TRUE;	


var P1			=	0;
var P2			=	1;
var ENEMY		=	1;
var HANDCARD_MAX	=	6;
var TOMBCARD_MAX	=	5;
var DECKCARD_MAX	=	51;
var CARD_MAX		=	18;	
var ROUND_MAX		=	99;
var NEED_WIN		=	4;	
var LOSE_LIMIT		=	1;	
var TURN_MAX		=	5;
var SHOWLOG_MAX		=	10;	
var WAIT_TIME		=	1000;


var GPART_READY			=	0;	
var GPART_READY_NEXTROUND	=	1;	
var GPART_COLLECTCARD		=	2;	
var GPART_SELECTELEM		=	3;	
var GPART_SHOW_RESULT		=	4;	
var GPART_SHOW_GRESULT		=	5;	


var RESULT_NOT		=	0;
var RESULT_P1_WIN	=	1;
var RESULT_P2_WIN	=	1;
var RESULT_ENEMY_WIN	=	1;
var RESULT_DRAW		=	2;


var GRESULT_NOT		=	0;
var GRESULT_P1_WIN	=	1;
var GRESULT_P2_WIN	=	2;
var GRESULT_ENEMY_WIN	=	2;
var GRESULT_DRAW	=	3;	


var ELEM_NOTCARD=	0;
var ELEM_FIRE	=	1;
var ELEM_WIND	=	2;
var ELEM_LIGHT	=	3;
var ELEM_DARK	=	4;
var ELEM_AQUA	=	5;
var ELEM_VAR	=	6;	

var ELEM_MAX	=	6;	
var ELEM_STR_TABLE = new Array("","火","風","光","闇","水","変");
var ELEM_COLOR_TABLE = new Array(0xCCCCCC,0xFF9999,0xCCFFCC,0xFFFFCC,0xCC99FF,0xCCFFFF,0xFFFFFF);

var ELEMSELECT_INVALID = 	10;	

var POINT_STR_TABLE = new Array("０","１","２","３","４","５","６");


var cCard = new Array(CARD_MAX);
cCard[0] = new CardClass(	ELEM_NOTCARD,	NO_MEAN);
cCard[1] = new CardClass(	ELEM_FIRE,	1);
cCard[2] = new CardClass(	ELEM_FIRE,	2);
cCard[3] = new CardClass(	ELEM_FIRE,	3);
cCard[4] = new CardClass(	ELEM_WIND,	1);
cCard[5] = new CardClass(	ELEM_WIND,	2);
cCard[6] = new CardClass(	ELEM_WIND,	3);
cCard[7] = new CardClass(	ELEM_LIGHT,	1);
cCard[8] = new CardClass(	ELEM_LIGHT,	2);
cCard[9] = new CardClass(	ELEM_LIGHT,	3);
cCard[10] = new CardClass(	ELEM_DARK,	1);
cCard[11] = new CardClass(	ELEM_DARK,	2);
cCard[12] = new CardClass(	ELEM_DARK,	3);
cCard[13] = new CardClass(	ELEM_AQUA,	1);
cCard[14] = new CardClass(	ELEM_AQUA,	2);
cCard[15] = new CardClass(	ELEM_AQUA,	3);
cCard[16] = new CardClass(	ELEM_VAR,	0);
cCard[17] = new CardClass(	ELEM_VAR,	1);


var nDeckTable = new Array(CARD_MAX);
nDeckTable[0]	=	0;
nDeckTable[1]	=	3;
nDeckTable[2]	=	3;
nDeckTable[3]	=	3;
nDeckTable[4]	=	3;
nDeckTable[5]	=	3;
nDeckTable[6]	=	3;
nDeckTable[7]	=	3;
nDeckTable[8]	=	3;
nDeckTable[9]	=	3;
nDeckTable[10]	=	3;
nDeckTable[11]	=	3;
nDeckTable[12]	=	3;
nDeckTable[13]	=	3;
nDeckTable[14]	=	3;
nDeckTable[15]	=	3;
nDeckTable[16]	=	3;
nDeckTable[17]	=	3;



var cTest = new TestClass();


var cBatCon = new BatConClass(GPART_READY,RESULT_NOT,GRESULT_NOT);


var cDeck = new DeckClass();


var cChara = new Array(2);
cChara[0] = new CharacterClass(P1,	0,	HANDCARD_MAX,	TOMBCARD_MAX);
cChara[1] = new CharacterClass(ENEMY,	0,	0,		0);



function TestClass()
{
	this.nCount	=	0;	

	return this;
}


function CardClass(_nElem,_nPoint)
{
	this.nElem	=	_nElem;		
	this.nPoint	=	_nPoint;	

	
	function CardClass_Show(Button)
	{
		
		SetStyle_backgroundColor(Button,ELEM_COLOR_TABLE[ this.nElem ]);

		
		if ( this.nElem == ELEM_NOTCARD)
			Button.value	=	ELEM_STR_TABLE[ this.nElem ];
		else
			Button.value	=	" " + ELEM_STR_TABLE[ this.nElem ] + "\n\n" + POINT_STR_TABLE[ this.nPoint ];
	}
	CardClass.prototype.Show = CardClass_Show;

	
	function CardClass_TurnDown(Button)
	{
		
		SetStyle_backgroundColor(Button,ELEM_COLOR_TABLE[0]);

		
		Button.value = ELEM_STR_TABLE[ 0 ];
	}
	CardClass.prototype.TurnDown = CardClass_TurnDown;

	return this;
}


function DeckClass()
{
	this.nCardNum = new Array(DECKCARD_MAX);
	this.nCardNum.ZeroMemory();
	this.nCardCt = 0;	

	var nPos;
	var nLoopCt = 0;

	
	for (var i = 0; i < CARD_MAX; i++)
	{
		for (var j = 0; j < nDeckTable[i]; j++)
		{
			
			nLoopCt = 0;
			do 
			{
				nPos = GetRand(0,DECKCARD_MAX-1)
				nLoopCt++;
			}while ( (this.nCardNum[nPos] != 0) && (nLoopCt <= 10000000) )

			this.nCardNum[nPos] = i;
		}
	}

	
	
	function DeckClass_DrawCard()
	{
		var nDrawCardNum = this.nCardNum[this.nCardCt];
		this.nCardCt++;
		if (this.nCardCt >= DECKCARD_MAX)	return FALSE;	
		else					return nDrawCardNum;
	}
	DeckClass.prototype.DrawCard = DeckClass_DrawCard;

	return this;
}


function CharacterClass(_nAttr,_nWinCt,_nFormHandPos,_nFormTombPos)
{
	this.nAttr	=	_nAttr;		
	this.nWinCt	=	_nWinCt;	
	this.nTakeElem	=	0;		
	this.nTakePoint	=	0;		
	this.nCardCt	=	0;		
	this.nTombCt	=	0;		

	this.nHandCardNum = new Array(HANDCARD_MAX);	
	for (var i = 0; i < this.nHandCardNum.length; i++)	this.nHandCardNum[i] = NO_MEAN;

	this.nTombCardNum = new Array(TOMBCARD_MAX);	
	for (var i = 0; i < this.nTombCardNum.length; i++)	this.nTombCardNum[i] = NO_MEAN;

	this.nFormHandPos	=	_nFormHandPos;
	this.nFormTombPos	=	_nFormTombPos;

	
	
	function CharacterClass_InitForRound()
	{
		this.nTakeElem	=	0;		
		this.nTakePoint	=	0;		
		this.nCardCt	=	0;		
		this.nTombCt	=	0;		

		this.nHandCardNum.ZeroMemory();
		this.nTombCardNum.ZeroMemory();

		this.TurnDownHandCard();
	}
	CharacterClass.prototype.InitForRound = CharacterClass_InitForRound;

	
	function CharacterClass_SortCard()
	{
		var src,dst;
		var nNum;
		var t;

		for (var i = 0; i < HANDCARD_MAX; i++)
		{
			for (var j = i+1; j < HANDCARD_MAX; j++)
			{
				nNum = this.nHandCardNum[i];
				if (cCard[nNum].nElem == ELEM_NOTCARD)
					src = 1000;	
				else
					src = cCard[nNum].nElem*4 + cCard[nNum].nPoint;

				nNum = this.nHandCardNum[j];
				if (cCard[nNum].nElem == ELEM_NOTCARD)
					dst = 1000;	
				else
					dst = cCard[nNum].nElem*4 + cCard[nNum].nPoint;

				if (src > dst)
				{
					
					t = this.nHandCardNum[i];
					this.nHandCardNum[i] = this.nHandCardNum[j];
					this.nHandCardNum[j] = t;
				}
			}
		}
	}
	CharacterClass.prototype.SortCard = CharacterClass_SortCard;

	
	function CharacterClass_SortCard_ForTake()
	{
		var t;

		for (var i = 0; i < HANDCARD_MAX; i++)
		{
			for (var j = i+1; j < HANDCARD_MAX; j++)
			{
				if (	cCard[ this.nHandCardNum[i] ].nElem != this.nTakeElem && 
					cCard[ this.nHandCardNum[i] ].nElem != ELEM_VAR		)
				{
					
					t = this.nHandCardNum[i];
					this.nHandCardNum[i] = this.nHandCardNum[j];
					this.nHandCardNum[j] = t;
				}
			}
		}
	}
	CharacterClass.prototype.SortCard_ForTake = CharacterClass_SortCard_ForTake;

	
	function CharacterClass_ShowHandCard()
	{
		for (var i = 0; i < HANDCARD_MAX; i++)
		{
			cCard[ this.nHandCardNum[i] ].Show(document.Form.HandCard[this.nFormHandPos + i]);
		}
	}
	CharacterClass.prototype.ShowHandCard = CharacterClass_ShowHandCard;

	
	function CharacterClass_ShowTombCard()
	{
		for (var i = 0; i < TOMBCARD_MAX; i++)
		{
			cCard[ this.nTombCardNum[i] ].Show(document.Form.TombCard[this.nFormTombPos + i]);
		}
	}
	CharacterClass.prototype.ShowTombCard = CharacterClass_ShowTombCard;

	
	function CharacterClass_TurnDownHandCard()
	{
		for (var i = 0; i < HANDCARD_MAX; i++)
		{
			cCard[ this.nHandCardNum[i] ].TurnDown(document.Form.HandCard[this.nFormHandPos + i]);
		}
	}
	CharacterClass.prototype.TurnDownHandCard = CharacterClass_TurnDownHandCard;

	
	function CharacterClass_TurnDownTombCard()
	{
		for (var i = 0; i < TOMBCARD_MAX; i++)
		{
			cCard[ this.nTombCardNum[i] ].TurnDown(document.Form.TombCard[this.nFormTombPos + i]);
		}
	}
	CharacterClass.prototype.TurnDownTombCard = CharacterClass_TurnDownTombCard;

	
	function CharacterClass_DrawCard(cDeck,nCount)
	{
		for (var i = 0; i < nCount; i++)
		{
			if (this.nCardCt >= HANDCARD_MAX)	return;

			
			this.nHandCardNum[this.nCardCt] = cDeck.DrawCard();
			this.nCardCt++;
		}
	}
	CharacterClass.prototype.DrawCard = CharacterClass_DrawCard;

	
	function CharacterClass_DumpCard(nNum)
	{
		
		if (this.nTombCt >= TOMBCARD_MAX) return;

		
		var t;
		t = this.nHandCardNum[nNum];
		this.nHandCardNum[nNum] = this.nTombCardNum[this.nTombCt];
		this.nTombCardNum[this.nTombCt] = t;

		this.nCardCt--;
		this.nTombCt++;
	}
	CharacterClass.prototype.DumpCard = CharacterClass_DumpCard;

	
	
	function CharacterClass_CountElem(_nElem,_bVal)
	{
		
		if (_nElem == ELEM_NOTCARD)	return 0;

		var bOrijinal = FALSE;	
		var count = 0;
		for (var i = 0; i < this.nCardCt; i++)
		{
			if ( _bVal && (cCard[ this.nHandCardNum[i] ].nElem == ELEM_VAR) )
				count++;	
			else if (cCard[ this.nHandCardNum[i] ].nElem == _nElem)
			{
				count++;
				bOrijinal = TRUE;
			}
		}

		
		if ( (_bVal) && (!bOrijinal) )	return 0;

		return count;
	}
	CharacterClass.prototype.CountElem = CharacterClass_CountElem;

	
	
	function CharacterClass_CountPoint(_nElem,_bVal)
	{
		
		if (_nElem == ELEM_NOTCARD)	return 0;

		var point = 0;
		for (var i = 0; i < this.nCardCt; i++)
		{
			if ( _bVal && (cCard[ this.nHandCardNum[i] ].nElem == ELEM_VAR) )
				point += cCard[ this.nHandCardNum[i] ].nPoint;	
			else if (cCard[ this.nHandCardNum[i] ].nElem == _nElem)
				point += cCard[ this.nHandCardNum[i] ].nPoint;
		}

		return point;
	}
	CharacterClass.prototype.CountPoint = CharacterClass_CountPoint;

	
	function CharacterClass_JudgeTake()
	{
		for (i = ELEM_NOTCARD+1; i < ELEM_MAX; i++)
		{
			if (this.CountElem(i,TRUE) >= 3)
				return TRUE;
		}
		return FALSE;
	}
	CharacterClass.prototype.JudgeTake = CharacterClass_JudgeTake;

	
	function CharacterClass_GetCountTake()
	{
		var max = 0;
		for (i = ELEM_NOTCARD+1; i < ELEM_MAX; i++)
		{
			if (this.CountElem(i,TRUE) > max)
				max = this.CountElem(i,TRUE);
		}
		return max;
	}
	CharacterClass.prototype.GetCountTake = CharacterClass_GetCountTake;

	
	function CharacterClass_GetMaxTakeElem()
	{
		var max = 0;
		for (i = ELEM_NOTCARD+1; i < ELEM_MAX; i++)
		{
			if (this.CountElem(i,TRUE) >= 3)
			{
				if (this.CountPoint(i,TRUE) > max)
					max = this.CountPoint(i,TRUE);
			}
		}
		return max;
	}
	CharacterClass.prototype.GetMaxTakeElem = CharacterClass_GetMaxTakeElem;

	
	function CharacterClass_SelectElem(nNum)
	{
		var elem = cCard[ this.nHandCardNum[nNum] ].nElem;

		
		if ( !this.JudgeTake() )		return ELEM_NOTCARD;
		
		
		if ( (elem != ELEM_VAR) && (this.CountElem(elem,TRUE)) >= 3)	return elem;
		else								return ELEMSELECT_INVALID;	
	}
	CharacterClass.prototype.SelectElem = CharacterClass_SelectElem;

	
	
	
	function CharacterClass_GetElemValue_AI(cRival)
	{
		var nElemP = new Array(ELEM_MAX);		
		var nElemValue = new Array(ELEM_MAX);		
		var nTombElem = new Array(cBatCon.nTurnCt-1);	
		var nTombPoint = new Array(cBatCon.nTurnCt-1);	

		
		var DumpTurn_table = new Array(1.0, 1.2, 1.4, 1.6, 1.8);

		
		nElemP.ZeroMemory();
		nElemValue.ZeroMemory();
		nTombElem.ZeroMemory();
		nTombPoint.ZeroMemory();

		
		for (var i = 0; i < cBatCon.nTurnCt-1; i++)
		{
			nTombElem[i] = cCard[ cRival.nTombCardNum[i] ].nElem;
			nTombPoint[i] = cCard[ cRival.nTombCardNum[i] ].nPoint;
		}

		
		for (var i = 0; i < cBatCon.nTurnCt-1; i++)
		{
			if (nTombElem[i] != ELEM_VAR)	
				nElemP[ nTombElem[i] ] += nTombPoint[i] * DumpTurn_table[i];
		}

		
		var next, prev;	
		for (var i = ELEM_NOTCARD+1; i < ELEM_MAX; i++)
		{
			next = i + 1;	if (next >= ELEM_MAX)		next = ELEM_NOTCARD+1;
			prev = i - 1;	if (prev <= ELEM_NOTCARD)	prev = ELEM_MAX-1;

			nElemValue[next] += nElemP[i];
			nElemValue[prev] -= nElemP[i];
		}
		
		for (var i = ELEM_NOTCARD+1; i < ELEM_MAX; i++)
		{
			if 	(nElemValue[i] < -4)	nElemValue[i] = -4;
			else if	(nElemValue[i] > 4)	nElemValue[i] = 4;
		}

		return nElemValue;
	}
	CharacterClass.prototype.GetElemValue_AI = CharacterClass_GetElemValue_AI;

	
	
	function CharacterClass_DumpCard_AI(nNum,cRival)
	{
		
		var nElemValue = this.GetElemValue_AI(cRival);
if (GAME_TEST == GT_TEST)
{
		nElemValue.AlertAll("nElemValue");
}

		
		var nCardPoint = new Array(this.nCardCt);	
		var elem = new Array(this.nCardCt);		
		var point = new Array(this.nCardCt);		

		
		var pair_table = new Array(NO_MEAN,0,3,7,3,3);

		
		var haste_table = new Array(NO_MEAN, 1.5, 1.7, 2.0, 3.0, 10.0);

		
		nCardPoint.ZeroMemory();
		elem.ZeroMemory();
		point.ZeroMemory();

		
		for (var i = 0; i < this.nCardCt; i++)
		{
			elem[i] = cCard[ this.nHandCardNum[i] ].nElem;
			point[i] = cCard[ this.nHandCardNum[i] ].nPoint;
		}

		
		var nTakeCt;	
		for (var i = 0; i < this.nCardCt; i++)
		{
			
			nCardPoint[i] += point[i];

			
			nCardPoint[i] += this.CountPoint(elem[i],TRUE);

			
			if (elem[i] != ELEM_VAR && elem[i] != ELEM_NOTCARD)
				nCardPoint[i] += nElemValue[ elem[i] ];

			
			nTakeCt = this.GetCountTake();	
			if ( nTakeCt < 3)
			{
				
				if (elem[i] == ELEM_VAR)
				{
					
					nCardPoint[i] += 10 * haste_table[ cBatCon.nTurnCt ];
				}
				else
				{
					nCardPoint[i] += pair_table[ this.CountElem(elem[i],TRUE) ] * 
								haste_table[ cBatCon.nTurnCt ];
				}
			}
			else if ( (nTakeCt == 3) && (elem[i] == ELEM_VAR) )
			{
				
				nCardPoint[i] += 10 * haste_table[ cBatCon.nTurnCt ];
			}
			else if (elem[i] == ELEM_VAR && point[i] != 0)
			{
				
				nCardPoint[i] += this.GetMaxTakeElem() * 2;
			}
			else
			{
				
				nCardPoint[i] += pair_table[ this.CountElem(elem[i],TRUE) ];
			}
		}
if (GAME_TEST == GT_TEST)
{
		nCardPoint.AlertAll("nCardPoint");
}

		
		this.DumpCard( nCardPoint.GetMinNum() );
	}
	CharacterClass.prototype.DumpCard_AI = CharacterClass_DumpCard_AI;

	
	function CharacterClass_SelectElem_AI(cRival)
	{
		
		if ( !this.JudgeTake() )	return ELEM_NOTCARD;

		
		var nElemValue = this.GetElemValue_AI(cRival);
if (GAME_TEST == GT_TEST)
{
		nElemValue.AlertAll("nElemValue");
}

		
		var nElemPoint = new Array(ELEM_MAX);
		nElemPoint.ZeroMemory();

		for (var i = ELEM_NOTCARD+1; i < ELEM_MAX; i++)
		{
			if ( this.CountElem(i,TRUE) >= 3 )
			{
				
				nElemPoint[i] += this.CountPoint(i,TRUE) + nElemValue[i];
			}
		}
if (GAME_TEST == GT_TEST)
{
		nElemPoint.AlertAll("nElemPoint");
}

		
		return nElemPoint.GetMaxNum();
	}
	CharacterClass.prototype.SelectElem_AI = CharacterClass_SelectElem_AI;

	
	function CharacterClass_ShowTake()
	{
		
		for (var i = 0; i < TOMBCARD_MAX; i++)
			SetStyle_display(document.Form.TombCard[this.nFormTombPos + i],"none");
		
		if (this.nTakeElem == ELEM_NOTCARD)
		{
			
			for (var i = 0; i < HANDCARD_MAX; i++)
				SetStyle_display(document.Form.HandCard[this.nFormHandPos + i],"none");
		}
		else
		{
			
			this.SortCard_ForTake();
			
			this.ShowHandCard();

			
			for (var i = 0; i < HANDCARD_MAX; i++)
			{
				
				if (cCard[ this.nHandCardNum[i] ].nElem == this.nTakeElem)	continue;
				if (cCard[ this.nHandCardNum[i] ].nElem == ELEM_VAR)		continue;

				
				SetStyle_display(document.Form.HandCard[this.nFormHandPos + i],"none");
			}
		}
	}
	CharacterClass.prototype.ShowTake = CharacterClass_ShowTake;

	return this;
}


function RoundLogClass()
{
	this.nElem	=	NO_MEAN;	
	this.nPoint	=	10;
	this.szResMark	=	NO_MEAN;	
}



function BatConClass(_nGamePart,_nResult,_nGameResult)
{
	this.nGamePart	=	_nGamePart;	
	this.nTurnCt	=	1;		
	this.nRoundCt	=	0;		
	this.nResult	=	_nResult;	
	this.nGameResult=	_nGameResult;	
	this.nScore	=	0;		
	this.nLoseCt	=	0;		

	
	this.cLog	=	new Array(2);
	for (var i = 0; i < 2; i++)		
	{
		this.cLog[i] = new Array(ROUND_MAX);
		this.cLog[i].ZeroMemory();
		
		for (var j = 0; j < ROUND_MAX; j++)
			this.cLog[i][j] = new RoundLogClass();
	}

	
	
	function BatConClass_InitForRound()
	{
		this.nTurnCt	=	1;		
	}
	BatConClass.prototype.InitForRound = BatConClass_InitForRound;

	
	function BatConClass_ShowResult()
	{
		var pos = new Array(2);

		
		pos[P1]		=	cChara[P1].nFormHandPos + (HANDCARD_MAX-1);
		pos[ENEMY]	=	cChara[ENEMY].nFormHandPos + (HANDCARD_MAX-1);
		SetStyle_backgroundColor(document.Form.HandCard[ pos[P1] ],ELEM_COLOR_TABLE[ 0 ]);
		SetStyle_backgroundColor(document.Form.HandCard[ pos[ENEMY] ],ELEM_COLOR_TABLE[ 0 ]);
		SetStyle_display(document.Form.HandCard[ pos[P1] ],"block");
		SetStyle_display(document.Form.HandCard[ pos[ENEMY] ],"block");

		
		
		for (var i = 0; i < 2; i++)
		{
			cChara[i].nTakePoint = 0;
			
			
			if (cChara[i].nTakeElem == ELEM_NOTCARD)	continue;

			for (var j = 0; j < cChara[i].nCardCt; j++)
			{
				if (	(cCard[ cChara[i].nHandCardNum[j] ].nElem == cChara[i].nTakeElem) ||
					(cCard[ cChara[i].nHandCardNum[j] ].nElem == ELEM_VAR)	)
				{
					cChara[i].nTakePoint += cCard[ cChara[i].nHandCardNum[j] ].nPoint;
				}
			}
		}
		
		document.Form.HandCard[ pos[P1] ].value = cChara[P1].nTakePoint
		document.Form.HandCard[ pos[ENEMY] ].value = cChara[ENEMY].nTakePoint

		
		if ( (cChara[P1].nTakeElem != ELEM_NOTCARD) && (cChara[ENEMY].nTakeElem != ELEM_NOTCARD) )
		{
			var sub = cChara[P1].nTakeElem - cChara[ENEMY].nTakeElem;
			if (sub == -1 || sub == 4)
			{
				cChara[P1].nTakePoint += 4;
				
				document.Form.HandCard[ pos[P1] ].value += "+4";
			}
			else if (sub == 1 || sub == -4)
			{
				cChara[ENEMY].nTakePoint += 4;
				
				document.Form.HandCard[ pos[ENEMY] ].value += "+4";
			}
		}

		
		if (cChara[P1].nTakePoint > cChara[ENEMY].nTakePoint)
		{
			cChara[P1].nWinCt++;	
			document.Form.HandCard[ pos[P1] ].value += "○";
			document.Form.HandCard[ pos[ENEMY] ].value += "×";
			this.cLog[P1][this.nRoundCt].szResMark	= "○";
			this.cLog[ENEMY][this.nRoundCt].szResMark = "×";

			
			this.nScore += cChara[P1].nTakePoint;
			this.nLoseCt = 0;
		}
		else if (cChara[P1].nTakePoint < cChara[ENEMY].nTakePoint)
		{
			cChara[ENEMY].nWinCt++;
			document.Form.HandCard[ pos[P1] ].value += "×";
			document.Form.HandCard[ pos[ENEMY] ].value += "○";
			this.cLog[P1][this.nRoundCt].szResMark	= "×";
			this.cLog[ENEMY][this.nRoundCt].szResMark = "○";
			
			
			this.nLoseCt++;
		}
		else
		{
			document.Form.HandCard[ pos[P1] ].value += "△";
			document.Form.HandCard[ pos[ENEMY] ].value += "△";
			this.cLog[P1][this.nRoundCt].szResMark	= "△";
			this.cLog[ENEMY][this.nRoundCt].szResMark = "△";
		}

		

		
		for (var i = 0; i < 2; i++)
		{
			this.cLog[i][this.nRoundCt].nElem	= cChara[i].nTakeElem;
			this.cLog[i][this.nRoundCt].nPoint	= cChara[i].nTakePoint;
		}


		
		
		document.Form.Score.value = "スコア\n"+cBatCon.nScore+" P\n\n";
		
		
		var start = this.nRoundCt-(SHOWLOG_MAX-1);	
		if (start < 0) 	start = 0;			
		for (var i = start; i < start+SHOWLOG_MAX; i++)
		{
			if (i <= this.nRoundCt)
				document.Form.Score.value += this.cLog[P1][i].szResMark+this.cLog[P1][i].nPoint+ " - " +this.cLog[ENEMY][i].nPoint+this.cLog[ENEMY][i].szResMark + "\n";
		}

		
		document.Form.Score.value += "\nトータル\n　"+cChara[P1].nWinCt+ " - " +cChara[ENEMY].nWinCt+ "　\n";
	}
	BatConClass.prototype.ShowResult = BatConClass_ShowResult;

	
	
	function BatConClass_GetGameResult()
	{
		if (cChara[P1].nWinCt >= NEED_WIN)
		{
			return GRESULT_P1_WIN;
		}
		else if (cChara[ENEMY].nWinCt >= NEED_WIN)
		{
			return GRESULT_ENEMY_WIN;
		}
		else
		{
			return GRESULT_NOT;
		}
	}
	BatConClass.prototype.GetGameResult = BatConClass_GetGameResult;

	
	function BatConClass_SubmitScoreRanking()
	{
		
		
		document.SubmitScore.Name.value = prompt("名前入力　全角半角に限らず12文字以内","名無しさん");
		document.SubmitScore.Name.value = document.SubmitScore.Name.value.substr(0,12);
		document.SubmitScore.Comment.value = prompt("何かひとこと　全角半角に限らず30文字以内","");
		document.SubmitScore.Comment.value = document.SubmitScore.Comment.value.substr(0,30);
		document.SubmitScore.Score.value = this.nScore;

		document.SubmitScore.ID.value = GetRand(1,NUMBER_MAX);	
		document.SubmitScore.Page.value = 0;	

		
		document.SubmitScore.submit();
	}
	BatConClass.prototype.SubmitScoreRanking = BatConClass_SubmitScoreRanking;

	
	function BatConClass_SubmitScoreRanking_Test()
	{
		
		
		document.SubmitScore.Name.value = prompt("名前入力　全角半角に限らず12文字以内","名無しさん");
		document.SubmitScore.Name.value = document.SubmitScore.Name.value.substr(0,12);
		document.SubmitScore.Comment.value = prompt("何かひとこと　全角半角に限らず30文字以内","");
		document.SubmitScore.Comment.value = document.SubmitScore.Comment.value.substr(0,30);
		document.SubmitScore.Score.value = 5;	

		document.SubmitScore.ID.value = GetRand(1,NUMBER_MAX);	
		document.SubmitScore.Page.value = 0;	

		
		document.SubmitScore.submit();
	}
	BatConClass.prototype.SubmitScoreRanking_Test = BatConClass_SubmitScoreRanking_Test;

	return this;
}




function OnClick_GameStart()
{
if (GAME_TEST == GT_TEST3)
{
	cBatCon.SubmitScoreRanking_Test();
}
	if ( (cBatCon.nGamePart != GPART_READY) && (cBatCon.nGamePart != GPART_READY_NEXTROUND) )
		return;

	
	for (var i = 0; i < HANDCARD_MAX*2; i++)
	{
		SetStyle_display(document.Form.HandCard[i],"block");
	}
	for (var i = 0; i < TOMBCARD_MAX*2; i++)
	{
		SetStyle_display(document.Form.TombCard[i],"block");
	}

	
	if (cBatCon.nGamePart == GPART_READY)
	{
		
		cBatCon.constructor(GPART_READY,RESULT_NOT,GRESULT_NOT);
		cChara[P1].constructor(		P1,	0,	HANDCARD_MAX,	TOMBCARD_MAX	);
		cChara[ENEMY].constructor(	ENEMY,	0,	0,		0		);
		cChara[ENEMY].TurnDownHandCard();
		cDeck.constructor();
		document.Form.Score.value = "スコア\n\n";
	}
	else if (cBatCon.nGamePart == GPART_READY_NEXTROUND)
	{
		
		cBatCon.InitForRound();
		cChara[P1].InitForRound();
		cChara[ENEMY].InitForRound();
		cDeck.constructor();
	}

	
	cBatCon.nGamePart = GPART_COLLECTCARD;

	
	cChara[P1].DrawCard(cDeck,6);
	cChara[ENEMY].DrawCard(cDeck,6);
	
	cChara[P1].SortCard();
	cChara[ENEMY].SortCard();
	
	cChara[P1].ShowHandCard();
	cChara[P1].ShowTombCard();
if (GAME_TEST == GT_TEST)
{
	cChara[ENEMY].ShowHandCard();
}
	cChara[ENEMY].ShowTombCard();

	SetStyle_display(document.Form.Explain,"block");
	document.Form.Explain.value	=	"捨てるカードを選んで下さい";
	SetStyle_display(document.Form.GameStart,"none");
	SetStyle_display(document.Form.Ranking,"none");
}


function OnClick_Ranking()
{
	document.SubmitScore.Name.value = "";
	document.SubmitScore.Comment.value = "";
	document.SubmitScore.Score.value = 0;
	document.SubmitScore.ID.value = 0;
	document.SubmitScore.Page.value = 0;

	document.SubmitScore.submit();
}


function OnClick_HandCard(_Object,_nNum)
{
	switch (cBatCon.nGamePart)
	{
	case GPART_COLLECTCARD:
		
		cChara[P1].DumpCard(_nNum);
		cChara[ENEMY].DumpCard_AI(_nNum,cChara[P1]);

		
		cChara[P1].SortCard();
		cChara[ENEMY].SortCard();

		
		cBatCon.nTurnCt++;
		if (cBatCon.nTurnCt > TURN_MAX)
		{
			
			cBatCon.nGamePart = GPART_SELECTELEM;
			document.Form.Explain.value = "発動する属性を選んで下さい";
		}
		else
		{
			
			cChara[P1].DrawCard(cDeck,1);
			cChara[ENEMY].DrawCard(cDeck,1);
		}

		
		cChara[P1].ShowHandCard();
		cChara[P1].ShowTombCard();
if (GAME_TEST == GT_TEST)
{
		cChara[ENEMY].ShowHandCard();
}
		cChara[ENEMY].ShowTombCard();
		break;

	case GPART_SELECTELEM:
		
		cChara[P1].nTakeElem = cChara[P1].SelectElem(_nNum);
		cChara[ENEMY].nTakeElem = cChara[ENEMY].SelectElem_AI(cChara[P1]);

		
		if (cChara[P1].nTakeElem == ELEMSELECT_INVALID)
			return;

		
		document.Form.Explain.value = "発動！！";

		

		cChara[P1].ShowTake();
		cChara[ENEMY].ShowHandCard();
		cChara[ENEMY].ShowTake();

		
		cBatCon.ShowResult();
		document.Form.Explain.value = "";

		
		if (cBatCon.nLoseCt >= LOSE_LIMIT)
		{
			
			SetStyle_display(document.Form.Explain,"block");
			SetStyle_display(document.Form.GameStart,"block");
			document.Form.Explain.value = "あなたは死にました…\n";
			alert("あなたは死にました…\nスコア　"+cBatCon.nScore+" P");
			document.Form.GameStart.value = "ゲームスタート";

			
			if (cBatCon.nScore > 1)
			{
				if ( confirm("ランキングへ登録しますか？") )
					cBatCon.SubmitScoreRanking();
			}

			
			cBatCon.nGamePart = GPART_READY;
			SetStyle_display(document.Form.Ranking,"block");
		}
		else
		{
			
			cBatCon.nRoundCt++;

			
			cBatCon.nGamePart = GPART_READY_NEXTROUND;
			SetStyle_display(document.Form.Explain,"none");
			SetStyle_display(document.Form.GameStart,"block");
			document.Form.GameStart.value = "次のラウンドへ";
		}
		break;
	}
}


function Test(a,b,c)
{
	
	for(i = 0 ; i < arguments.length ; i++ )
		document.writeln( arguments[i] );
}



function InitGame()
{
	document.write("<PRE>");	


	
	document.write( "<table border=0 style='border-color: black;'>\n<tr>\n<td>\n" );
	document.write( '<IMG src="elements.png" width="160" height="160" border="1">' );
	document.write( "</td>\n");
	document.write( "<td>\n");

	
	
	document.write( "<table border=0>\n" );
	document.write( "<tr>\n" );
	for (var i = 0; i < HANDCARD_MAX-1; i++)
	{
		document.write( "<td><input type=button name=HandCard style='width: 48px; height: 64px;'></td>" );
	}
	document.write( "<td><input type=button name=HandCard style='width: 48px; height: 64px;'></td>" );
	document.write( "</tr>\n" );

	document.write( "<tr>\n" );
	for (var i = 0; i < TOMBCARD_MAX; i++)
	{
		document.write( "<td><input type=button name=TombCard style='width: 48px; height: 64px;'></td>" );
	}
	document.write( "</tr>\n" );

	
	document.write( "<tr>\n" );
	for (var i = 0; i < TOMBCARD_MAX; i++)
	{
		document.write( "<td><input type=button name=TombCard style='width: 48px; height: 64px;'></td>" );
	}
	document.write( "</tr>\n" );

	for (var i = 0; i < HANDCARD_MAX-1; i++)
	{
		document.write('<td><input type=button name=HandCard style="width: 48px; height: 64px;" OnClick="OnClick_HandCard(this,'+i+')"></td>' );
	}
	document.write('<td><input type=button name=HandCard style="width: 48px; height: 64px;" OnClick="OnClick_HandCard(this,'+i+')"></td>' );
	document.write( "</tr>\n" );
	document.write( "</table>\n" );

	document.write( "<td>\n" );
	
	document.write( "<input type=button name=Score STYLE=\"width: 120px; height: 240px; text-align: center; border-color: black; border-width: 1;\" value='スコア\n\n'>\n" );
	document.write( "</td>\n" );

	document.write( "<tr>\n<td align='center' colspan='3'>\n" );
	
	document.write( "<br><input type=button name=Explain STYLE=\"width: 240px; height: 20px; border-color: black; border-width: 1;\" value=''>\n" );
	
	document.write( "<p><input type=button name=GameStart STYLE=\"width: 120px; height: 40px;\" value=ゲームスタート OnClick=OnClick_GameStart()></p>\n" );

	
	document.write( "<p><input type=button name=Ranking STYLE=\"width: 120px; height: 40px;\" value=ランキング OnClick=OnClick_Ranking()></p>\n" );
	document.write( "</td>\n</tr>\n" );

	document.write( "<td>\n</td>\n" );

	document.write( "</tr>\n</table>\n" );
	
}


function UninitGame()
{
	document.write("</PRE>");
}


function GameMain()
{
}


function EntryPoint()
{
	
	InitGame();

	
	UninitGame();
}