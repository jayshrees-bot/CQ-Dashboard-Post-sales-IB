const AGENTS = {
  asrarahmedp: {
    name: "Asrarahmed_P",
    initials: "AP",
    color: "#7B2D8B",
    cq: 90,
    audits: 25,
    ncf: 0,
    totalErrors: 18,
    params: {"ss": 10, "sol": 3, "prob": 3, "tag": 1, "fu": 1},
    aois: [
      {
            "cat": "Soft Skills",
            "label": "Failed to portray Empathy when necessary",
            "text": "Occurred 8 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Soft Skills",
            "label": "Tone and manner was not inviting for queries",
            "text": "Occurred 2 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Probing",
            "label": "Lack of probing",
            "text": "Occurred 2 time(s) this month. Consistent improvement needed in this area."
      }
],
    cases: [
      {
            "query": "Order Status",
            "score": 91,
            "comment": "Shaya delivery issue and Cx said that the she has updated the wrong pincode and she has received an call for the delivery needs to know the delivery status of the Order and as per tracking the Order has been delivered . Need an little more empathy since the Order was RTO and then redispatched ."
      },
      {
            "query": "Order Status",
            "score": 81,
            "comment": "Due to no response from the Cx Order has been marked RTO . Cx needs the delivery on the same day and the same cant been done . Re dispatch has been already raised and IC informed the excepted TAT for the delivery ."
      },
      {
            "query": "15 Days MB",
            "score": 100,
            "comment": "Order was delivered but the same is not marked delivered and Cx wish to have thr product returned back and needs pick up . JC informed the details to the Store team but not able to assist the Cx and later JC raised the ticket and return raised ."
      },
      {
            "query": "Order Status",
            "score": 90,
            "comment": "Cx has placed an Order and its getting delayed due to the ERP Issue and JC has informed that he will check and call back with an update and the New Order has ben placed but the same is in UC and once the pick up confirmation is given only the New order will be delivered . JC Called the Cx but no res"
      },
      {
            "query": "Product Quality",
            "score": 91,
            "comment": "Cx has purchased an product from First Cry its an Baby Bracelt and teh same turned black and needs to get the same resolved . JC suggested to visit the store of us with the product and invoice copy so that we can get the issue sorted . Cx was a little irate and agreed for the same . No apology or em"
      },
      {
            "query": "General Query",
            "score": 100,
            "comment": "Over all a fine call and JC has shared the break up of the Product on WA."
      },
      {
            "query": "Digi Gold",
            "score": 78,
            "comment": "Cx has invested in DG in the thought that the he has invested on POP for the Monthly payment for Rs. 5 K . Cx has invested Rs. 5 K in Phone Pe in DG not in POP , JC was suppose to explain in detail that the Payment has been done in DG via Phone Pe and not enrolled for the POP , Cx was interested in "
      },
      {
            "query": "Repair Status",
            "score": 100,
            "comment": "Cx has received an call for the repair charges confirmation and Cx has given two products for the repair and one was confirmed by the Cx JC from OB team called the Cx for the 2nd product . Cx was asking the reason for the charges for the 2nd product and JC informed the details and confirmed that the"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Cx called again stating that the refund is cancelled and the Order will be delivered. JC informed the Cx and RTO raised. Cx visited the store and place an New Order and the Online Order has been raised for RTO . JC informed the Cx that if the delivery os attempted again to receive the delivery rand "
      },
      {
            "query": "Refund Status",
            "score": 91,
            "comment": "Cx needs the refund update for the RTO order and JC has checked the details and informed the details and Cx was looking for the immediate refund and Cx was extremely irate but the same cant bene done from our end since the RTO Confirmatoon is not shared and Cx need the same t be done asap on the sam"
      },
      {
            "query": "Cancellation",
            "score": 100,
            "comment": "Cx wish to have the Order Cancelled since the Making charges is high , Call was diconnected and Cx called again . Cx needs the refund update . Cx was irate ad TAH team has given wrong commitment for the refund and he needs the refund on the next day which os not possible . TAT informed . No details "
      },
      {
            "query": "Product Quality",
            "score": 75,
            "comment": "Cx is not satisfied the with the Product Quality of the product . Its an SHAYA Product and JC informed that the pik cup has bene arranged and will make sure the process is done asap . Cx was not happy with the update and regardng the replacement info shared. Tone needs to be orked oin and no empathy"
      },
      {
            "query": "Order Status",
            "score": 63,
            "comment": "Order has been marked delivered but the Cx has not received the delivery . Mrs. Oindrillahas already escalated the same to the Logistics team and waiting for the update and the Order has been delivered back to FC and JC informed the details and informed that she will be receiving an update soon . JC"
      },
      {
            "query": "Order Status",
            "score": 88,
            "comment": "Order Delivery status and the delivery is already delayed . Due to delay in delivery Cx wish to have the Order Cancelled and process for the refund . JC informed that he will raise for the refund and RTO and no retention effort on call found . BOD ERP issue time ."
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Cx has placed an Order in the month of Feb and still now the same is getting dispatched and Cx wish to connect with the sales person and informed that she iwll take action on the same if the Order is no delivered soon to her . JC informed that he has escalated the same and will make sur te delivery "
      },
      {
            "query": "Digi Gold",
            "score": 100,
            "comment": "Cx is not able to check the E GOLD details via APP and JC checked with the Cx and CX said that he is facing the issue from last 2 days and JC checked for the screen shot and assisted the Cx . JC called the again and informed the details and we dont have any issue and informed the Cx , Cx said that h"
      },
      {
            "query": "15 Days MB",
            "score": 81,
            "comment": "Cx wish to have the Shaya Order Canceled due to delay in delivery and needs 15 days MB , JC informed that the same has been delayed due to ERP Issue and it needs a week more time for the delivcery and JC informed that the refund will be processed and Order will be cancelled . Need emoathy and apolog"
      },
      {
            "query": "Cancellation",
            "score": 100,
            "comment": "Over all a good chat and its regarding the POP and Order Cancelleation and JC handelled the chat well ."
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Order Delivery status and JC informed the update and the but due to the tech and ERP Issue it seems the Order has been RTO and sent back to CL ."
      },
      {
            "query": "Repair Status",
            "score": 100,
            "comment": "Cx needs to have the product repaired and JC informed to the process of Store Drop and detaills shared . Over all a fine chat ."
      },
      {
            "query": "Cancellation",
            "score": 81,
            "comment": "Cancellatin call and Cx wants the Order to be cancelled due to the delay in delivery and JC was suppose to the inform the reason for the delay and try for retion but not much efforts found on call and need to be more active on call ."
      },
      {
            "query": "Shaya Repair / Replacement",
            "score": 88,
            "comment": "Cx was facing some issue with the product . Need valid proboing on call . Cx feels the product is loose for her and wish to have the product returned in 15 days MB . Cx has no plans for purchase now and needs return."
      },
      {
            "query": "Cancellation",
            "score": 88,
            "comment": "Cx wants to have the product to be returned since the product the not looking good for him . Cx has POP payment in the order . JC needs to inforn the Cx that the POP amount cant bene refunded and only can go with 15 days exchange and before enrollment on the plan all the details will be informed ."
      },
      {
            "query": "Refund Status",
            "score": 78,
            "comment": "Cx has done the Payment for POP from Phonepe but the same is not reflecting from our end nd JC informed that we had not received the payment and asked the Cx to sent the details of the same with the screenshot to CS mail and email received . No active POP found in the profile and JC needs to check i"
      },
      {
            "query": "Refund Status",
            "score": 85,
            "comment": "Cx has to get the refund for the last purchase and the same is an Store Ordrer and the refund has been raised but the same has been cancelled and JC called informed the Cx that he will inform the store team and will get the issue sorted asap . Over fine but its been 3 months the refund is penidng du"
      }
],
    paramCaseMap: {"ss": [0, 4, 6, 9, 11, 16, 20, 23, 24], "prob": [21, 22, 23], "sol": [6, 8, 13], "fu": [3], "tag": [1]},
  },
  nitheeshr: {
    name: "Nitheesh_R",
    initials: "NR",
    color: "#9C4DB8",
    cq: 84,
    audits: 24,
    ncf: 1,
    totalErrors: 35,
    params: {"ss": 25, "sol": 4, "prob": 2, "tag": 2, "fu": 2},
    aois: [
      {
            "cat": "Soft Skills",
            "label": "Failed to portray Empathy when necessary",
            "text": "Occurred 12 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Soft Skills",
            "label": "Tone and manner was not inviting for queries",
            "text": "Occurred 4 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Solution",
            "label": "Failed to take ownership on resolution",
            "text": "Occurred 3 time(s) this month. Consistent improvement needed in this area."
      }
],
    cases: [
      {
            "query": "Order status",
            "score": 78,
            "comment": "Cx was facing a delay in the delivery of her Shaya order due to ERP migration for which she was infomred that she is eligible for a compliment gift. \n\nJC had a check over the details and updated the cx on it. \n\nFailed to portray Empathy when necessary , As it was taking longer time to check for the "
      },
      {
            "query": "15 days Moneyback",
            "score": 88,
            "comment": "Cx contacted us to know the update on the retrun status of her product under 15 days moneyback. \n\nJC had a check over the details tried to retain the cx however later as cx wanted to proceed with the moneyback Jc helped accordingly. \n\nFailed to portray Empathy, Failed to check further assistance. \n\n"
      },
      {
            "query": "15 Days MB",
            "score": 45,
            "comment": "Cx on call informed that she is looking for 15 days MB and not for exchange and JC informed that the same can been done from the Cx end and nor we place exchange Orders for the Cxs . Actual issue with the Cx was that she needs days MB and not exchmage where as the JC missed to unerstand and call was"
      },
      {
            "query": "Cancellation",
            "score": 100,
            "comment": "Cx has placed and Cancelled the Order and the refund is on process and Cx is irate due to the delay in in the process and JC informed the upated on TAT for the refund and Cx is still irate and needs escalation matrix and JC has shared the grievences mail id and Cx has dropped an email too . Over all"
      },
      {
            "query": "Credit balance",
            "score": 95,
            "comment": "Cx contacted us to know the update why have he received the lesser exchange value. \n\nJC had a check over the details and infomred the reason for it. \n\nHowever as the JC saba informed that the cx would receive the whole invoice value a CB from her was arranged. \n\nFailed to check further assistance"
      },
      {
            "query": "15 Days MB",
            "score": 66,
            "comment": "Cx needs the SHAYA Order pikc up to be done and nees assistance and JC informed the TAT for the pick up . Cx said that she missed the call from the Courier person and now he is not picking the call . No retention effort on call and no empathy ."
      },
      {
            "query": "Order Status",
            "score": 91,
            "comment": "Cx needs to know the Delivery Status of the Order - Hawk Solitaire Stud for Men and JC checked and informed the details . JC checked the details and informed that with in 24-48 hrs the updated iwll be updated in the app or Cx will be updated and due to ERP Issue its getting delayed . Cx agreed . Nee"
      },
      {
            "query": "Digi Gold",
            "score": 75,
            "comment": "Cx needs the information regarding the DG and JC checked and conveyed the details to the Cx . Need to more empathatic on call . Needs to avoid interreption on call . Need to work on Tone and Modulation."
      },
      {
            "query": "Order Cancellation",
            "score": 88,
            "comment": "Cx was looking to have her order cancelled due to the delay in delivery. \n\nJC tried to retain the cx however as cx wanted to proceed with the cancellation needful was done. \n\nFailed to portray Empathy when necessary. Could try to keep the call on hold rather than dead air."
      },
      {
            "query": "Shaya product issue",
            "score": 75,
            "comment": "Cx had received a pair of Shaya earring where both the earring belonged to one side. \n\nJC had a check and as 15 days exchange request was raised guided her accordingly. \n\nFailed to portray Empathy when necessary, IVR transfer missed \n\nFailed to tag in ameyo"
      },
      {
            "query": "Delivery Related",
            "score": 100,
            "comment": "Cx was facing a delay in the delivery of her order and was looking for the cancellation of it.\n\nHowever as it was been manually dispatched the same wasn't possible and informed the cx and retained her. \n\nIVR transfer missed - BOD for NCF, Timely apology, Incorrect 2nd level disposition selected"
      },
      {
            "query": "Refund Status",
            "score": 81,
            "comment": "Cx called again for the Refund and JC checked and informed the TAT for the same . ERP Issue . Rate of speech is too high and JC needs to work on the same . BOD . Cx needs the email confirmation for the what JC has commited and email shared from Asrars email id ."
      },
      {
            "query": "Return pick up",
            "score": 90,
            "comment": "Cx had a 15 days exchange request raised for his product however was willing to return it at the store. \n\nJc took the necessary action to close it. \n\nOverall a good call IVR transfer missed."
      },
      {
            "query": "Refund",
            "score": 83,
            "comment": "Cx had a query with the GWD refund which was pending since long. \n\nJC had a check with the executive whom he had a word with however as she wasn't available next day call was made and helped the cx with the update on the refund status. \n\nLater once the avlue was added in the profile cx utilised to m"
      },
      {
            "query": "RTO Cancellation",
            "score": 78,
            "comment": "Cx had requested for the cancellation of her order post dispatch and so contacted us to know the status on it. \n\nJC had a check over the details and raised the required request to have it processed further. \n\nWhile checking could have kept the call on hold - Avoid repeating it \n\nFailed to tag in ame"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Over all the chat was fine . Cx has raised an Cancellatin and JC informed that Cx that he needs to check and taken the approval for the same for Cancellatiin and once apprved on only the same can been done and he will be arranging the call back from the TELUGU Speaking JC since Cx was confiortable i"
      },
      {
            "query": "Refund",
            "score": 91,
            "comment": "Cx was extremely irate due to the delay in refund and was calling back to back and coming on chats for the same . Many SR has bene raised but nothing was working out and Cx was in touch with JC and he informed that he will check and call back and call back done and details informed . Refund has been"
      },
      {
            "query": "Order Status",
            "score": 53,
            "comment": "Cx needs to know the delivery status of the Order # B7F136AF. Cancellation has been requested by the Cx . JC assisted the and informed that he will make the Order delivered or Cancelled and process the refund . Cx was fine with 48 hrs of TAT asked by JC and if not he will move legally with the issue"
      },
      {
            "query": "N/A",
            "score": 0,
            "comment": "Cx has given an product for repair and she needs the delivery update for the same . JC informed the Cx that the Order has been manually dispatched and will be delivered with in 3-4 working days . Cx has given 2 products for repair and one of them has been dispatched and orger one is completed with t"
      },
      {
            "query": "Refund Status",
            "score": 72,
            "comment": "Cx wants to know the refund update and the product has been dispatched and now the same has been marked RTO . Cx needs to know the refund update . JC checked and informed TAT for the refund . Tagging Missed . Need an apology for the delay happened ."
      },
      {
            "query": "Repair Status",
            "score": 100,
            "comment": "Cx has given an product for repair and charges for Rs. 800 /- where as the Cx is not satisfied and needs the same to be waived off and the product has been altready reached store post repair . JC informed the Cc that its an wear and tear issue that y the Cx is charged for and the same cant been waiv"
      },
      {
            "query": "Repair status",
            "score": 85,
            "comment": "Cx had a order given for repair and against which there was a issue from the store team were they raised is against the incorrect order. \n\nJC coordinated with the store team and had the issue resolved which made the cx satisfied. \n\nQuery well handled but apology missed, Failed to portray Empathy whe"
      },
      {
            "query": "Re-dispatch",
            "score": 88,
            "comment": "Cx had a order placed which was wrongly picked up and so he contacted us to get his product back. \n\nJc had a check over the details and informed that the would check and revert back. \n\nDelaed call back was done however yet the resolution is not been provided by the concern team, Kindly have a follow"
      },
      {
            "query": "Delivery related",
            "score": 100,
            "comment": "Cx had a order placed for which the delivery was pending since long so contacted us to know an update on it. \n\nJC had a check over the details and accurately updated the cx about it. \n\nAlso raised it to the concern team\n\n(Timely apology, *so here* was communicated multiple times)"
      }
],
    paramCaseMap: {"ss": [0, 1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 19, 21, 22], "prob": [2, 13], "sol": [2, 5, 17, 18], "fu": [2, 17], "tag": [9, 14]},
  },
  mallikar: {
    name: "Mallika_R",
    initials: "MR",
    color: "#6A1F78",
    cq: 90,
    audits: 8,
    ncf: 0,
    totalErrors: 4,
    params: {"ss": 2, "sol": 1, "prob": 1, "tag": 0, "fu": 0},
    aois: [
      {
            "cat": "Soft Skills",
            "label": "Affirmation",
            "text": "Occurred 1 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Soft Skills",
            "label": "Failed to portray Empathy when necessary",
            "text": "Occurred 1 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Probing",
            "label": "Lack of probing",
            "text": "Occurred 1 time(s) this month. Consistent improvement needed in this area."
      }
],
    cases: [
      {
            "query": "15 days Moneyback",
            "score": 100,
            "comment": "Cx contacted us to know the update on the retrun status of her product under 15 days moneyback. \n\nJC had a check over the details tried to retain the cx however later as cx wanted to proceed with the moneyback Jc helped accordingly. \n\nOverall a good call."
      },
      {
            "query": "Refund Status",
            "score": 100,
            "comment": "Cx has raised for LTB and the refund is not yet credited and Cx is Irate and JC informed the details to the Cx and TAT for the refund and Cx is irate due to the delay in refund process ."
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Over all a fine chat for the delay in dispatch and delivery of the Order ."
      },
      {
            "query": "Refund",
            "score": 88,
            "comment": "Cx contacted us to know the update on the refund of her order which was marked as RTO. \n\nJc infomred about the update and also raised a RTO request for it however as was facing a issue to raise the refund ticket was raised for it. \n\nCouldn't understand what cx tried to mention in the last, Also coul"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Order Delivery status and JC checked nd informed the TAT for 24 hrs for the delivery and Ph no has been confirmed ."
      },
      {
            "query": "GWD",
            "score": 88,
            "comment": "GWD query , JC checked nd informed that the refund has bene done on 19th Feb and Transction no has been shared .and details informed to the Cx . Needs to be a little more empathy on call since Cx has not received the amount ."
      },
      {
            "query": "POP",
            "score": 41,
            "comment": "POP Cancellation . JC informed the details of the POP redemption and in not willing to make the purchase how the process will be worked . POP can been redemed post 30 days and if the Cx needs to have the same to be redeemed as cash post 90 days the same will be transfered to DG and post deductions a"
      },
      {
            "query": "Refund Status",
            "score": 100,
            "comment": "Cx called again for the Refund and JC checked and informed the TAT for the same . ERP Issue ."
      }
],
    paramCaseMap: {"ss": [3, 6], "prob": [6], "sol": [6], "fu": [], "tag": []},
  },
  chanchals: {
    name: "Chanchal_S",
    initials: "CS",
    color: "#B06ACC",
    cq: 80,
    audits: 24,
    ncf: 4,
    totalErrors: 41,
    params: {"ss": 20, "sol": 9, "prob": 5, "tag": 4, "fu": 3},
    aois: [
      {
            "cat": "Soft Skills",
            "label": "Failed to portray Empathy when necessary",
            "text": "Occurred 9 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Solution",
            "label": "Incorrect information given",
            "text": "Occurred 4 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Soft Skills",
            "label": "Failed to check further assistance",
            "text": "Occurred 3 time(s) this month. Consistent improvement needed in this area."
      }
],
    cases: [
      {
            "query": "Order Status",
            "score": 88,
            "comment": "Cx has placed an Order but the ph no mentioned is wrong Cx will be able to share the ID Proof but the issue is with the Ph no . Later JC informed tat she will make the necessary arrangments for the delivery and inform the logistics team and Order was delivered on 01st March . Need valid probing on c"
      },
      {
            "query": "Refund",
            "score": 91,
            "comment": "Cx contacted us to know the update on the status of the GWD refund. \n\nJc had a accurate check of the details and helped the cx on it. \n\nAvoid interrupting the cx. \n\n(Try confirming the order ID in the beginning itself.)"
      },
      {
            "query": "15 Days Moneyback",
            "score": 40,
            "comment": "Cx contacted us to return the product under 15 Days money back. \n\nJC had a check over the details initially tried to retain however wrong order ID was confirmed from the different cx profile and passed the incorrect information that the same isn't possible. \n\nIrrelevant probing done, Incorrect infor"
      },
      {
            "query": "15 Days MB",
            "score": 100,
            "comment": "Order has bene delayed in delivery and Cx wants the same to be cancelled and proceed with refund . JC tried conviencing the Cx but Cx was not interested and needs refund only . Cx said that she needs the refund to be done for the amount that is already in the Profile and JC informed that she will ch"
      },
      {
            "query": "Cancellation",
            "score": 0,
            "comment": "Cx contacted us to have her order cancelled. \n\nJc tried to retain but better efforts to retain needs to be added. \n\nFailed to portray Empathy when necessary. \n\nHowever tone need to be more inviting for the query. \n\nMissed to raise the refund as per cx request. Failed to tag in ameyo"
      },
      {
            "query": "Product Quality",
            "score": 69,
            "comment": "Cx has purchased an product from First Cry its an Baby Bracelt and teh same turned black and needs to get the same resolved . Cx was a little irate and agreed for the same . No apology or empathy on call . JC informed the Cx to visit the same store or the source where it has been purchased , which i"
      },
      {
            "query": "Repair Status",
            "score": 0,
            "comment": "Cx needs to know regarding the LTE update and JC checked and informed the details . No apology on call for the delay happened . Cx wish to go with Repair and since the sme is not yet started with Online JC suggested to visit the store and drop the product so that the repair can been taken inward and"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Order Delivery Status and Cx needs the needs the delivery to on the same day . JC checked and informed the details . JC informed that she will escalate the same and make the Order delivered ."
      },
      {
            "query": "Order status",
            "score": 65,
            "comment": "CX had a order placed for which the amount was deducted from her end however the same was not received at our end. \n\nJC had a check over the details and infomred that the same is been failed at our end which would be auto reversed. \n\nTone and manner was not inviting for queries, Failed to portray Em"
      },
      {
            "query": "Delivery related",
            "score": 83,
            "comment": "Cx contacted us as she was facing a delay in the delivery of her order where she haven't received any call from the delivery agent. \n\nJC had a check over the details and raised a ticket for re-attempt. \n\nIrrelevant probing done even after cx mentioned that she have not received any call the same was"
      },
      {
            "query": "Delivery related",
            "score": 93,
            "comment": "Cx had a order placed and the delivery was delayed. \n\nJc had a check over the details and as required raised a ticket for it. \n\nAvoid dead air\n\n(Timely apology, Could have kept the call on mute for few sec while cheking for the details)"
      },
      {
            "query": "Refund",
            "score": 93,
            "comment": "Cx had a order placed against which she was suppose to recive the GWD refund. \n\nJC did the necessary probing and raised the ticket as well Informing the cx that she would revert back in 24 hours. \n\nFailed to portray Empathy when necessary\n\nHowever ensure to follow up on this by providing the complet"
      },
      {
            "query": "Order Status",
            "score": 0,
            "comment": "\"Cx called again stating that the refund is cancelled and the Order will be delivered. JC informed the Cx and RTO raised. Cx visited the store an dplace an New Order and the Online Order has been raised for RTO . RTO KF was not raised and only 15 days MB has been raised an which is wrong update and "
      },
      {
            "query": "Delivery related",
            "score": 88,
            "comment": "Cx had a Shaya order placed in the month of Jan which was reflecting to be delivered post the cancellation request. \n\nJC had a check over the details, informing to raise a ticket to the concern team. \n\nTimely apology was required as well as coukd have used more of better phrases."
      },
      {
            "query": "Pick up",
            "score": 88,
            "comment": "Cx had returned a product to us but the same was not reflecting in the application. \n\nJc did the necessary probing and raised the concern in the existing ticket for it.\n\nOverall a good call\n\nIncorrect 2nd level disposition selected, Failed to check further assistance"
      },
      {
            "query": "Store Order Cancellation",
            "score": 78,
            "comment": "Cx has placed an Store Order and due to some issue hs heas cancelled the Order and now she needs the refund to be done to her Source account but the same cant been done since Store Order cant been cancelled and refunded to source . JC informed that refund can been done bjut later informed the Cx tha"
      },
      {
            "query": "Order Status",
            "score": 78,
            "comment": "Cx has placed an Order and the same is delayed regarding the delivery . TAT informed and the Order is getting delayed in delivery . Due to delay in delivery Cx wish to have the Order cancelled ad proceed with refund . Order has bene cancelled an drefund initiated . Cx has rejceted the ssme from the "
      },
      {
            "query": "LTE / LTB",
            "score": 31,
            "comment": "Cx said that he has done with the purcase in the year if 2022/23 and its was a Gift it seems and she is looking for the exchange of the same amd she is in touch with the Store already . Since the store team is not helping her she needs assiatance from outr end . Cx is neither able to share the Order"
      },
      {
            "query": "N/A",
            "score": 0,
            "comment": "Cx has gievn an product for repair and she needs the delivery update for the same . JC checked and informed the Cx that the repair is on process and once the same is completed teh Order will be delivered to the Cx asap . Later Cx called IB and Mr. Nitheesh checked and informed that the Order has bee"
      },
      {
            "query": "General Query",
            "score": 88,
            "comment": "Cx has made the purchase of Gold Coin from TATA CLIQ and wish to sell the product . JC informed the same we wont pruchase , JC would also inform the Cx that we wont be able to take the product as LTB / LTE since the product is purchased from other brand and we can take the same in OGE if the Cx is o"
      },
      {
            "query": "Delivery related",
            "score": 100,
            "comment": "Cx had a order placed for which she was facing a courier issue and so was disappointed about it.\n\nJC did the necessary probing and retained the cx by raising the required request. \n\nCall was well handled."
      },
      {
            "query": "Order Status",
            "score": 46,
            "comment": "Cx is confortable in Telugu and JC Called and Cx informed that she has placed an Order for GC and the same is not getting delivered from a while , Cx wants to cancel the Order and process the refund . JC agreed for the same and informed that she will cancel and process the refund . Its an GC order c"
      },
      {
            "query": "Digi Gold",
            "score": 91,
            "comment": "Cx had sold the Digi gold via Moneyview app and was facing a issue with the refund of it. \n\nJC did the necessary probing and provided the cx with the Moneyview customer care no. \n\nCould use more of better positive phrase."
      },
      {
            "query": "Gold Coin",
            "score": 85,
            "comment": "Cx had a Gold coin order placed and due to the delay in the delivery was looking for the cancellation of it. \n\nAs per the policy it wasn't possible and JC informed that however but as Cx was compelling informed that she would check and revert back. \n\nLet the cx complete and then say to avoid interup"
      }
],
    paramCaseMap: {"ss": [1, 4, 5, 8, 10, 11, 13, 14, 15, 16, 17, 21, 22, 23], "prob": [2, 9, 15, 17, 21], "sol": [2, 4, 5, 6, 12, 16, 18, 21], "fu": [2, 4, 12], "tag": [4, 8, 9, 14]},
  },
  juwairiyaa: {
    name: "Juwairiya_A",
    initials: "JA",
    color: "#8E3AA0",
    cq: 95,
    audits: 25,
    ncf: 0,
    totalErrors: 8,
    params: {"ss": 5, "sol": 2, "prob": 0, "tag": 0, "fu": 1},
    aois: [
      {
            "cat": "Soft Skills",
            "label": "Failed to portray Empathy when necessary",
            "text": "Occurred 5 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Solution",
            "label": "Failed to take ownership on resolution",
            "text": "Occurred 2 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Follow Up",
            "label": "Failed to Email/Whatsapp/SMS as per commitment",
            "text": "Occurred 1 time(s) this month. Consistent improvement needed in this area."
      }
],
    cases: [
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Over all a fine call ."
      },
      {
            "query": "Cancellation",
            "score": 100,
            "comment": "Cx wants the order status but the Order has bene marked RTO and refund has been raised but the pick up confirmation is pending and JC infomred that she will check with the team and get the refund process asap ."
      },
      {
            "query": "15 Days MB",
            "score": 100,
            "comment": "Delay Delivery and refund has been processed and Cx needs to know regaridng the refund update . JC explianed the details bec 15 days exchamge has been raised and JC cancelled the same and raised for 15 days MB . Retention cant been pitched since Cx is already irate due to delay in deliver of the Ord"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Due to delay in dispatch and delivery Cx is irate and needs the refund asap for the same . JC checked the detais and informed the update . ERP Issue is still going on . JC Checkec the details and infofmed the update ."
      },
      {
            "query": "Cancellation",
            "score": 91,
            "comment": "Order Status and delivery update . JC informed that she will check and call back since the Servver is down . JC called and informed the update . Cx asked to have trhe Order cancelled and process with the refund , no apology or empoathy on call and Order has been raised for RTO and refund raised ."
      },
      {
            "query": "RTO",
            "score": 91,
            "comment": "Cx has placed an SILVER Coin and requested for an Return and Cancellation , RTO / Refund , JC informed that she will chekc an dcall back since One View is not working . JC raised the RTO and Refund for the same . No empathy on call and due to delay in delivery Cx wish to have the Order Cancelled . N"
      },
      {
            "query": "Xclusive Points",
            "score": 91,
            "comment": "Cx has placed an Order but the Xclusive points not added . Sever issue and JC informed that she will check and call back . JC check teh product details and informed the Xclusive points calculation does in CL . Xclusive points calculation details shared . Cx was not saitisfied with the update . Need "
      },
      {
            "query": "Refund Status",
            "score": 75,
            "comment": "Cx is waiting for the refund and the same is processed but no yet credited to the Cx Bank account and getting SMS for updading the Bank Account details in APP wheres the same is updated already . jC informed that she will check and call back due to system issue and JC called the Cx but no response a"
      },
      {
            "query": "Refund Status",
            "score": 100,
            "comment": "Order was cancelled due to delay in delivery and the refund is still pending . CX needs to know the refund status of the same . JC informed the Cx that she will check and call the Cx back with an update for teh refund and JC called the Cx but no response and SMS shared ."
      },
      {
            "query": "Repair Status",
            "score": 100,
            "comment": "Cx wish to have the product repaired , JC checked and assisted the Cx. Post Quality chck up on the repaie charges will be confirmed , JC informed that ther charges wount be applicable . ERP issue and Store drop informed for the repair and Cx wa not finw with visiting the store. BOD."
      },
      {
            "query": "Order Status",
            "score": 81,
            "comment": "Cx was connected on chat and die to no resonse JC called and informed the Cx that 22 K GC wount be available and we can cancel and place a New order with other Karat or add the amount in to profile . Cx is not able to understand she needs telugu assistance where as JC missed understand the same . Cx"
      },
      {
            "query": "Refund",
            "score": 83,
            "comment": "Cx needs the refund update for the RTO order and JC has checked the details and informed the Cx that she will check nd call back but no call back found . One View issue and Order no is not getting opened. BOD , One View Issue ."
      },
      {
            "query": "Order Status",
            "score": 88,
            "comment": "Cx wants to know the delivery status of the Order and needs the same to be delivered on or before 05th March but the same can been delivered only by 09th March and JC informed taht she will check and call back the Cx post checking with the Logistics team and no call bck found and Cx himself called u"
      },
      {
            "query": "LTE / LTB",
            "score": 91,
            "comment": "CX wants to know the regarding the pick up of the LTB order and JC informed the details and Cx was fine with the call . Cx said tat she will be visiting the store and make the New Purchase . it would be better check the reason for the sell back . Since Cx was looking for LTB an apology needs to be t"
      },
      {
            "query": "Refund Status",
            "score": 91,
            "comment": "Cx has given the product the product and needs to know to refund update and Cx was coming back to back for the same reason and was irate . JC informed that the process is on and Quality check not completed and she has raised the SR of the same and will have the refund done asap . Apology for the del"
      },
      {
            "query": "15 Days MB",
            "score": 100,
            "comment": "CX has received an delivery of the Order and she is looking to return the product in 15 days MB . JC informed that the same cant been done since the Cx has already done with 15 days exchange for the store Order and Cx can go with LTE / LTB Only . Cx was not satisfifed and informed that she will be f"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Cx wants the Order delivery status and JC informed the update the reason for the delay happened and New product is getting manufactiured and wil have the Order dispatched and delivered asap ."
      },
      {
            "query": "Shaya Repair / Replacement",
            "score": 88,
            "comment": "Cx wants to get the SHAYA Product to be repaired but as as of now we had not received any update . Information shared . Need a little apology while informing the same ."
      },
      {
            "query": "Cancellation",
            "score": 100,
            "comment": "Over all a good retention call ."
      },
      {
            "query": "Store Order Cancellation",
            "score": 100,
            "comment": "Cx has received an defective product and needs to return the same or cancel the product , its an Store order. Retention tried but Cx needs refund only . Informed Store team ."
      },
      {
            "query": "Shaya Repair / Replacement",
            "score": 100,
            "comment": "Cx needs to know regarding the SHAYA repair of the product . JC informed the details to the Cx since its an SHAYA repair ."
      },
      {
            "query": "Repair Status",
            "score": 100,
            "comment": "Cx has Purchased an Swastik Baby Nazaria Gold Bracelet Set of 2 and once of the same is broken and Cx has only one part with her and one of the part is with another Baby . Cx needs the same to be get it repaired ."
      },
      {
            "query": "Cancellation",
            "score": 100,
            "comment": "Due to delay in delivery Cx wish to hav ethe Order Cancelled . Cx is very irate since there is no update on the Order and Cx was alteady in touch with Mr, Nitheesh and over all the JC handelled the call well ."
      },
      {
            "query": "Repair Status",
            "score": 100,
            "comment": "Repair Related delay . Cx was extremely irate since the delay has happened and JC was trying her best to inform the delay reason and CX was asking for the ful refund of the product due to the delay happned and if not needs the repair done and deliver the order asap . JC handled the call well and ove"
      },
      {
            "query": "Refund Status",
            "score": 100,
            "comment": "Over all a good call where teh Cx was not happy with the 10% deductions for the refund to be processed from the Profile Balance to Cx Bank Account and JC took the appoval and get the same done ."
      }
],
    paramCaseMap: {"ss": [4, 5, 10, 14, 17], "prob": [], "sol": [11, 12], "fu": [7], "tag": []},
  },
  mazian: {
    name: "Mazia_N",
    initials: "MN",
    color: "#C485D9",
    cq: 81,
    audits: 24,
    ncf: 2,
    totalErrors: 38,
    params: {"ss": 24, "sol": 8, "prob": 4, "tag": 0, "fu": 2},
    aois: [
      {
            "cat": "Soft Skills",
            "label": "Failed to portray Empathy when necessary",
            "text": "Occurred 16 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Solution",
            "label": "Failed to take ownership on resolution",
            "text": "Occurred 5 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Soft Skills",
            "label": "Tone and manner was not inviting for queries",
            "text": "Occurred 3 time(s) this month. Consistent improvement needed in this area."
      }
],
    cases: [
      {
            "query": "15 Days Exchange",
            "score": 78,
            "comment": "Cx said that she has received an wrong product with different gold and JC informed that she has placed the and received the oigjt product and Cx wish to have the same returned and JC informed the details . Cx said that she will have the same exchanged from store and online pick up needs to be cancel"
      },
      {
            "query": "15 Days Moneyback",
            "score": 83,
            "comment": "Cx contacted us to know the update on the return status of her product under 15 days moneyback. \n\nJC had a check over the details tried to retain the cx however later as cx wanted to proceed with the moneyback Jc helped accordingly. \n\nFailed to portray Empathy, Accurate info could have been given wh"
      },
      {
            "query": "Order confirmation",
            "score": 90,
            "comment": "Cx had given a product under exchange against which new order was placed and wanted to know how would the same be mapped . \n\nJC had a check over the details and helped the cx on it. \n\nOverall a good call however could have apologised. \n\nFailed to Email as per commitment."
      },
      {
            "query": "Return Pick Up",
            "score": 81,
            "comment": "Cx needs refind since she is not okay with the product and feels unconfortable , Cx said that she is willing to have it purchased from the store . Since the pick up cant been done due to no servicable PINCODE JC needs ti be a little more polite and owe apology for the same aand suggest Store Visit ."
      },
      {
            "query": "Order Status",
            "score": 48,
            "comment": "Order Status and Cx needs the delivery of the Order asap and JC informed the details and Cx is looking for store pick up and JC has raised the SR for faster delivery and follow up call back done but no response and SMS shared . No apology or empathy for the delay happned and hold procedure needs to "
      },
      {
            "query": "Order Confirmation",
            "score": 93,
            "comment": "CX had a order placed for which the amount was deducted from her end however the same was not received at our end. \n\nJC had a check over the details and informed that the same is been failed at our end which would be auto reversed.\n\nFailed to portray Empathy when necessary. Try using more of positiv"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Cx has placed an exchange Order and Cx needs the Payment to be mapped to the New Order and JC checked Payment mapping done . Need to be more active on call and Cx was facing delay in WA Replied and JC seeked apology for the same . BOD ."
      },
      {
            "query": "Order Status",
            "score": 53,
            "comment": "Order Status . Pick up confirmation and payment mapping is pending and Cx needs the Order to be delivered asap. Order has been picked up by the Cx on 05th March . No apology for the delay happened . Call hold needs to be worked on ."
      },
      {
            "query": "Delivery status",
            "score": 88,
            "comment": "Cx had a delivery of her Shaya order pending since last 1 month. \n\nJc had a check over the details and helped the cx to have it done at the earliest. \n\nFailed to portray Empathy when necessary, While checking could have placed the call on hold"
      },
      {
            "query": "Delivery Related",
            "score": 93,
            "comment": "Cx had a order pkaced using the exchange amount and it was almost aa month or two but the cx was facing the delay. \n\nInitially JC fumbled and informed that she would give a CB to cx, However later had a check over the details assured the cx and raised the ticket and needful was done and query is bee"
      },
      {
            "query": "Refund",
            "score": 85,
            "comment": "Cx had a pending refund since long time and so he was irate. \n\nAs the JC didn't receive the update on the refund tried to inform the same to the cx. \n\nTone and manner need to be polite and avoid being upfront. \n\nBOD - Order ID"
      },
      {
            "query": "Order Status",
            "score": 0,
            "comment": "Cx called again stating that the refund is cancelled and the Order will be delivered. JC informed the Cx and RTO raised. Cx visited the store an dplace an New Order and the Online Order has been raised for RTO . No proper information and no empathy and ownership on call. The way the JC spoken to the"
      },
      {
            "query": "POP Related",
            "score": 85,
            "comment": "Cx had a treasure chest plan which was converted as GV indeed it was suppose to be cnverted to Digi Gold. \n\nSo Jc raised a concern to the team informing that the sma would be sorted in 2-3 days. \n\nFailed to portray Empathy when necessary Tone need to be even more polite. \n\nEnsure to follow up on thi"
      },
      {
            "query": "Shaya delivery related",
            "score": 100,
            "comment": "Cx was facing a issue with the delivery of her shaya order post dispatch. \n\nJc did the necessary probing and raised a ticket for it. \n\nAlso cx had a concern in regatds with the refund if the other order for which as well request was raised. \n\nTimely apology is required \n\nOverall a good call"
      },
      {
            "query": "Refund",
            "score": 85,
            "comment": "Cx had a order returned at the store initially under exchange and later opted for the MB of it. \n\nJC had a check over the details and also raised the same concern towards the team. \n\nFailed to portray Empathy when necessary, try using more of positive phrase"
      },
      {
            "query": "Store Order Cancellation",
            "score": 46,
            "comment": "Cx has placed an Store Order and she has cancelled the same . Cx needs the refund of the same but as per CL Policies the same will be only added in Cx Profile and for store order no refund or 15 days MB is applicable . JC was suppose to inform the same but JC informed that she will arrange a call ba"
      },
      {
            "query": "LTE / LTB",
            "score": 100,
            "comment": "Cx visited the store for dropping the product in the store for LTB and Cx needs the KF that is raised for the LTB in online to be cancelled . JC checked and Cancelled the same and Cx has done the LTB process in the store ."
      },
      {
            "query": "Order Status",
            "score": 81,
            "comment": "Cx was calling for the same repeated issue for the Marked delivered but the Cx has nkt received the delivery of the Order and JC checked and informed that she will be receiving the delivery asap and investigation is going on . Email is going on for the same. No positive phrases and empathy on call ."
      },
      {
            "query": "LTE / LTB",
            "score": 66,
            "comment": "Cx has raised an LTB in the Month of FEB and she has not received any update on the refund part and JC informed the Cx that the she will check with the store and get the same done asap . Cx said that she needs the refund asap and want to complaint the same JC informed Cx to drop an email to CS and t"
      },
      {
            "query": "Refund Status",
            "score": 100,
            "comment": "Cx has cancelled and needs the refund update for the Order , JC informed the previous refund KF has been cancelled and she will be raising a New one and the refund will be processed soon and TAT informed and New KF Found and the refund is yet to be processed ."
      },
      {
            "query": "Order Status",
            "score": 47,
            "comment": "Cx is confortable in Telugu and JC Called and Cx informed that she has placed an Order for GC and the same is not getting delivered from a while , Cx wants to cancel the Order and process the refund . Email on going for the same and JC informed that she will check and inform the team to have the Ord"
      },
      {
            "query": "Order confirmation",
            "score": 0,
            "comment": "Cx had a order placed where the exchange value was to be mapped so that the order could be dispatched post that. \n\nJC did the necessary probing and informed the cx that she would Call her back within 48 hours. \n\nNo records of the CB found hence NCF. \n\nFailed to portray Empathy when necessary, Avoid "
      },
      {
            "query": "Refund",
            "score": 93,
            "comment": "Cx had a order marked as RTO and was looking for an update on the refund of it. \n\nJC had a check over the details and passed it to the concern to the respective team. \n\nTimely apology is required and also need to use more of positive phrase."
      },
      {
            "query": "Shaya 15 Days MB",
            "score": 83,
            "comment": "Cx contacted us as he wanted to return a Shaya product due to the product not meeting up cx's expectations. \n\nJC had a check over the details and tried to retain, However later as cx wnated back to source needful was done. \n\nFailed to apologise, More efforts to retain need to be made. \n\nAlways add a"
      }
],
    paramCaseMap: {"ss": [0, 1, 3, 4, 5, 7, 8, 9, 10, 12, 14, 15, 17, 18, 20, 21, 22, 23], "prob": [0, 4, 11, 15], "sol": [1, 4, 7, 11, 15, 18, 20, 23], "fu": [2, 20], "tag": []},
  },
  muzakirn: {
    name: "Muzakir_N",
    initials: "MN",
    color: "#A050B0",
    cq: 83,
    audits: 24,
    ncf: 2,
    totalErrors: 36,
    params: {"ss": 20, "sol": 6, "prob": 4, "tag": 0, "fu": 6},
    aois: [
      {
            "cat": "Soft Skills",
            "label": "Failed to portray Empathy when necessary",
            "text": "Occurred 7 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Soft Skills",
            "label": "Failed to use positive phrases / ownership statement",
            "text": "Occurred 5 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Solution",
            "label": "Failed to take ownership on resolution",
            "text": "Occurred 5 time(s) this month. Consistent improvement needed in this area."
      }
],
    cases: [
      {
            "query": "15 Days MB",
            "score": 100,
            "comment": "15 Days MB call . Cx needs to go with 15 days MB only and JC tried for the exchange for retention but Cx denied ."
      },
      {
            "query": "Order status",
            "score": 91,
            "comment": "Cx had a order placed and contacted us to know the status on it as the payment was not debited from her end. \n\nJC had a check over the details and helped the cx with an update on it. \n\nHowever in the beginning as the voice wasn't clear to the cx avoid using upfront sentences."
      },
      {
            "query": "15 Days Moneyback",
            "score": 90,
            "comment": "Cx contacted us to know the update on the return status of her product under 15 days moneyback. \n\nJC had a check over the details tried to retain the cx however later as cx wanted to proceed with the moneyback Jc helped accordingly. \n\nExtreme long hold - BOD for NCF"
      },
      {
            "query": "Order Status",
            "score": 88,
            "comment": "Due to no response from the Cx Order has been marked RTO . Re dispatch has been raised and JC infomed the details ad excepted TAT for delivery . Hollding the call needs to be worked on . BOD ."
      },
      {
            "query": "15 Days Moneyback",
            "score": 0,
            "comment": "Cx contacted us to have his order returned However he was facing a issue with it as the product was not marked as delivered. \n\nTone and manner was not inviting for queries, Missed to confirm the order ID, BOD for NCF as Failed to take the ownership \n\nDenied the request of the CX in an inappropriate "
      },
      {
            "query": "Refund Status",
            "score": 100,
            "comment": "Cx has Cancelled an Order and needs to know the refund status of the Order and Call was disconncted but later JC called the Cx back no response ."
      },
      {
            "query": "Delivery status",
            "score": 90,
            "comment": "Cx had a order placed for which the delivery was missed and cx was concerned about it. \n\nJC raised a ticket to the team informing to have it delivered at the earliest. \n\nMissed to check on the details that the product was manually dispatched and could have raised the ticket accordingly."
      },
      {
            "query": "Return Pick Up",
            "score": 100,
            "comment": "Cx wish to have the product to be returned but he ha facing the issue on the return and the excustives are not picking the product . JC informed the details of the TP and Pcking details to the Cx . Over all fine call ."
      },
      {
            "query": "Order Status",
            "score": 88,
            "comment": "Order Status and JC checked and informed the details with the Cx . Cx is irate regarding the delay in dispatch and delivery . If the Cx is asking the details of the organization head and J needs to informed the details ."
      },
      {
            "query": "General",
            "score": 41,
            "comment": "Cx had a order placed for which the engraving was missing and so cx contacte dus to know about the issue.\n\nJC infomred that he would check and helped however call was kept on long hold and then was disconnected. \n\nLack of probing - Order ID\n\nNo records of the CB found but SMS sent - BOD \n\nFailed to "
      },
      {
            "query": "Rush request",
            "score": 93,
            "comment": "Cx had a order placed which was to be dispatched by 4-3 and the same was missed. \n\nJC did the necessary probing and forwarded the request to the concern team.\n\nFailed to portray Empathy when necessary"
      },
      {
            "query": "Refund Status",
            "score": 0,
            "comment": "Cx needs the refund update for the RTO order and JC has checked the details and informed the Cx that he will raise the KF for the RTO and MB and will process the refund asap and was sharing the ticket no but the call got disconneted in between and JC called the Cx back but there is no KF found in On"
      },
      {
            "query": "General",
            "score": 35,
            "comment": "Cx had made a purchase of a ring in the month of Feb for which he was not able to view the E-certificate as well as facing a issue with the making charges. \n\nJc had a check over the E-certificate details and helped the cx on it. However for the invoice informed the cx that he would have the concern "
      },
      {
            "query": "Delivery status",
            "score": 63,
            "comment": "Cx had placed a order 2 months back and has been continously contacting us to get a resolution on this. \n\nJc did the necessary probing and raised a ticket but the same was not passed to concern team. \n\nMissed to use more of ownership phrases."
      },
      {
            "query": "Invoicing issue",
            "score": 85,
            "comment": "Cx had a MTO order placed at the store in the month of Jan and now while collecting the product from the store the extra charges to be collected from her end is higher than mentioned earlier. \n\nJc tried to check over the details and provide a rough info about it as the complete details weren't visib"
      },
      {
            "query": "Repair Status",
            "score": 100,
            "comment": "Cx was having issue with the product that he has purchased in 2023 and needs to know the details of the same . Swastik Baby Gold Bangle , JC suggested to visit the store and they can check and update and repair process informed . Cx agreed . Cx was on hold for 15 mins on call and no reply in WA chat"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Cx needs the Order status and the deliveey is delayed and Cx needs to know the details of the same . Its an TAH order and due to ERP Issue the delay has happened and JC informed the same and informed that will make sure the delivery asap . Ordrer has been delivered on 09th March . Cx was itrate sinc"
      },
      {
            "query": "Order Status",
            "score": 30,
            "comment": "JC informed that the Order has been completed the same will be dispatched with in 24 hrs and JC informed the the details he has shared is updated in the system and he will make sure the dleivery asap . JC informed the Cx that due to ERP issue and nothing will be updated in the app and Cx needs to wa"
      },
      {
            "query": "General Query",
            "score": 81,
            "comment": "Cx was conncted on chat and due to delay in response or other issue the cx left the chat ad JC Called the Cx back . Cx claims the the price is increasing very high . LTE / LTB value details informed . Later Cx said that she nmeeds to know the details of the pricing increase of the product and JC inf"
      },
      {
            "query": "POP",
            "score": 100,
            "comment": "Cx has enrolled for POP and wish to cancel and proceed with refund . JC informed the same cant been done since its an POP and the Payment done can been used for the purchase only and no refund is possible ."
      },
      {
            "query": "Order Status",
            "score": 88,
            "comment": "Cx called and informed that her Order has been marked delivered on March 5th and not received the delivery of the Order yet and she needs the Order to be delivered asap and JC checked and informed the Cx that the same is under investigation and the TAT for the same will be 10-15 days and once done t"
      },
      {
            "query": "Credit balance",
            "score": 85,
            "comment": "Cx had made a purchase of a ring from the store and for which he was looking for an update on the refund for the excess amount. \n\nJC had a check over the details and informed that he would check for the further updates from the concern team, Once updtae received the same was updated to the cx as wel"
      },
      {
            "query": "Order confirmation",
            "score": 93,
            "comment": "Cx had placed a order for which the payemnt was not deducted from the cx end but the order reflected to be confirmed \n\nJc had a check over the details and updated the cx accurately. Later as cx was looking to place a new order call was transferred to Presales team \n\nFailed to portray Empathy when ne"
      },
      {
            "query": "15 Days Moneyback",
            "score": 75,
            "comment": "Cx was looking to return a Shaya product due to the quality issue. \n\nJc had a check over the details and as the request was already raised same was informed to the cx. \n\nFailed to portray Empathy when necessary, also missed to use of of positive phrase as well as could have tried to retain the cx."
      }
],
    paramCaseMap: {"ss": [1, 2, 3, 4, 9, 10, 12, 13, 14, 17, 18, 21, 22, 23], "prob": [4, 8, 9, 12], "sol": [4, 11, 12, 13, 17, 23], "fu": [4, 6, 11, 12, 13], "tag": []},
  },
  oindrillad: {
    name: "Oindrilla_D",
    initials: "OD",
    color: "#5B1668",
    cq: 88,
    audits: 21,
    ncf: 1,
    totalErrors: 19,
    params: {"ss": 10, "sol": 5, "prob": 1, "tag": 2, "fu": 1},
    aois: [
      {
            "cat": "Soft Skills",
            "label": "Failed to portray Empathy when necessary",
            "text": "Occurred 8 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Solution",
            "label": "Incomplete information given",
            "text": "Occurred 2 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Solution",
            "label": "Failed to take ownership on resolution",
            "text": "Occurred 2 time(s) this month. Consistent improvement needed in this area."
      }
],
    cases: [
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Delay Delivery and Cx needs the Order status . Order was delivered on the next day on 28th Feb . Details shared and JC was connected with the Cx on WA."
      },
      {
            "query": "Order status",
            "score": 100,
            "comment": "Cx contacted us as she was facing a delay in the delivery of her order. \n\nJc raised a ticket to the concern team informing the same. \n\nKindly check and follow up as yet we see that dispatch details aren't reflecting."
      },
      {
            "query": "Refund",
            "score": 80,
            "comment": "Cx contacted us to as she wanted to know the update on the refund status of her order. \n\nJC had a check and informed that she would check with the team and have then asked to do it. \n\nTimely apology missed, Ensure to follow up further on this by having the issue resolved. \n\nAvoid long hold"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Cx needs the Order Status and the Order is in transit to FC and JC shared the details to the Cx . Over all a fine call ."
      },
      {
            "query": "Refund",
            "score": 100,
            "comment": "Cx contacted us to know about the difference in the weight of the product. \n\nJC had a check over the details and helped the cx with the accurate information on it. \n\nOverall a good call. \n\n(Could have mentioned the timeline of the refund)"
      },
      {
            "query": "Order Status",
            "score": 90,
            "comment": "Cx missed the call from Mr, Asrar and Cx called back and JC assisted the Cx and informed the Cx that she will check the Order delivery status and call back that post checking call back done but no response . SMS shared . SMS needs to be shared with an update that what is the update we had received f"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Order Delivery status and JC checked nd informed the TAT for 24 hrs for the delivery and Ph no has been confirmed . Ms. Mallika has spoken with the Cx . Cx called again for the Order delivery update and JC has informed the details . New TAT of 24-48 hrs has bene shared ."
      },
      {
            "query": "E-certificate",
            "score": 73,
            "comment": "Cx contacted us to know get the E-certificate of his order. \n\nJC had a check over the details and informed that the same is due to tech issue. \n\nFailed to portray Empathy when necessary, Missed to pass the concern to the respective team. \n\nBOD for NCF"
      },
      {
            "query": "LTE / LTB",
            "score": 91,
            "comment": "Cx has already purchased Gold Coins from Carat Lane and now the same is not showing in App because the Cx has made the purchase on 2014 but the same is not visible in the app or the website . Cx was looking for LTE and details of the caluculation has been shared by the JC and Cx disconnected the cal"
      },
      {
            "query": "Shaya Product quality",
            "score": 91,
            "comment": "Cx contacted us to give one of her shaya product under repair. \n\nHowever as the same was not resumed informed the same to the cx. \n\nFailed to portray Empathy when necessary\n\n(Could have mentioned that charges could be applicable later if given for repair after 6 months or a year)"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Cx has placed an Order and the same is marked delivered but the Cx has not received the delivery , JC informed the Cx that she has raised the SR nd will make the Order delivery asap and the same will be updated in the App as well . Cx was fine and later Cx call was again connected to the JC and deta"
      },
      {
            "query": "15 days Money back",
            "score": 100,
            "comment": "Cx had returned a product at the store due to the quality issue and wanted a 15 Days Moneyback for it. \n\nJC did the necessary probing and arranged a CB from the store as the product was already given at te store."
      },
      {
            "query": "Delivery status",
            "score": 93,
            "comment": "Cx had a order placed which was to be collected from the store but as they where facing a issue to generate the invoice the cx was facing delay in picking up the product. \n\nJC did the necessary probing and infomred the store team to look into this and solve this isue at the earliest. \n\nFailed to por"
      },
      {
            "query": "Shaya15 Days Moneyback",
            "score": 80,
            "comment": "Cx had a return request raised for her Shaya product since December. \n\nJC did the necessary probing and raised the request for it. \n\nNo efforts to retain the cx also under Shaya for nosepin and Toe ring we don't have a 15 Days MB applicable. \n\nAvoid this in future cases."
      },
      {
            "query": "Cancelltion",
            "score": 56,
            "comment": "Cx wants to return the product in 15 days MB , JC tried for retention but Cx needs money back only and due to systen glitch and ERP issue and One View was done BOD, KC informed the Cx to have the product to be dropped in the store an dcx left the chat and Cx was asking for call back but JC missed to"
      },
      {
            "query": "N/A",
            "score": 47,
            "comment": "Due to delay in Order Cx wants bthe same to be cancelled and proceed with the refund . RTO Informed by the Cx . Need mre empoathy on call since Cx is facing the issue due to the ERP . Hold time needs to be reduced its moire than 09 mins Cx was hold . Connectivity issue and TAT informed . Tagging Mis"
      },
      {
            "query": "15 Days MB",
            "score": 0,
            "comment": "Cx had raised a return request under 15 days money back and contacted us to know the update on it. \n\nJC had a check however as she had multiple chats open inappropriate pharse used which reflected to be rude behaviour. hence NCF. \n\nAlso missed to check for the reason for the return."
      },
      {
            "query": "Refund Status",
            "score": 91,
            "comment": "Cx wants to know the refund update and the product has been dispatched and now the same has been marked RTO . Cx needs to know the refund update . JC checked and informed TAT for the refund ."
      },
      {
            "query": "Refund Status",
            "score": 91,
            "comment": "Cx wants to know the refund of the GWD and JC has shared the detais of the same amd shared the transactions no also with the Cx via SMS . An empathy needs to be there in call since Cx said that she is not able to find the same in the payment source and needs to work on call hold procedure . BOD ."
      },
      {
            "query": "General Query",
            "score": 75,
            "comment": "JC has received an blank call and where as the JC was suppose to call back and no call back done from JCs end and the same is getting repeated many times . BOD ."
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Cx was conneted over the chat for the Order status and JC informed the Cx that the delivery date for the Odrer is on 23rd March and poost that due to no reponses the JC called the Cx and nr / SMS sent ."
      }
],
    paramCaseMap: {"ss": [2, 7, 8, 9, 12, 15, 16, 17, 18], "prob": [16], "sol": [5, 13, 14, 15], "fu": [14], "tag": [2, 15]},
  },
  thejab: {
    name: "Theja_B",
    initials: "TB",
    color: "#D0A0E0",
    cq: 87,
    audits: 25,
    ncf: 1,
    totalErrors: 28,
    params: {"ss": 15, "sol": 3, "prob": 4, "tag": 3, "fu": 3},
    aois: [
      {
            "cat": "Soft Skills",
            "label": "Failed to portray Empathy when necessary",
            "text": "Occurred 8 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Soft Skills",
            "label": "Tone and manner was not inviting for queries",
            "text": "Occurred 4 time(s) this month. Consistent improvement needed in this area."
      },
      {
            "cat": "Probing",
            "label": "Lack of probing",
            "text": "Occurred 3 time(s) this month. Consistent improvement needed in this area."
      }
],
    cases: [
      {
            "query": "Shaya Repair / Replacement",
            "score": 100,
            "comment": "Cx needs the update on the SHAYA Repair and JC informed the ERP Issue and delay in repair process and JC has informed the update on the delivery of the Order post repair , since needs an email confirmation for the same JC shared the same ."
      },
      {
            "query": "Reverse pick up",
            "score": 66,
            "comment": "Cx contacted us to know the process of packing the Tamper proof. \n\nJc had a check and shared the video of it to the cx. However the tone wasn't inviting as well as could have apologised. \n\nIVR transfer missed, Incorrect 2nd level disposition selected"
      },
      {
            "query": "15 Days Moneyback",
            "score": 93,
            "comment": "Cx contacted us to return his shaya order under 15 days Money back. \n\nJc had a check over the details and tried to retain as well. \n\nHowever later as cx wanted to proceed with return only helped the cx on it. \n\nFailed to portray Empathy when necessary. \n\n(Also could have transferred the call to IVR,"
      },
      {
            "query": "Refund Status",
            "score": 88,
            "comment": "Cx needs the update on refund for the pick up done . JC informed the Cx that the pick up confirmation needs to be confirmed with Logistics post that only we will be able to proceed with the refund . TAT shared . Need to inform the details with the Cx and check for the AWB No ."
      },
      {
            "query": "15 Days Exchange",
            "score": 100,
            "comment": "Order has been picked up but the amount is not credited in the Profile . Details checked and processed informed ."
      },
      {
            "query": "Refund Status",
            "score": 91,
            "comment": "Cx needs to know the refund status since the Order has bene cancelled and Cx needs to know the update and JC checked and informed the details . Refund processed and TAT informed . Need apology and empathy on call since the refund is pending for a long time . grievances mail id has been shared but th"
      },
      {
            "query": "Order Status",
            "score": 91,
            "comment": "Order Status and JC checked and informed the details with the Cx . TAT for the delivery shared . Apology missed on call ."
      },
      {
            "query": "Repair status",
            "score": 73,
            "comment": "Cx contacted us to know the update on the repair status of her order. \n\nJc had a check over the details and informed the approx. timeline of it. \n\nFailed to portray Empathy when necessary, Missed to raise the ticket for it."
      },
      {
            "query": "Order Cancellation",
            "score": 80,
            "comment": "Cx contacted us to have his Shaya order cancelled. \n\nJc had a check over the details and helped the cx on it. \n\nOrder ID not confirmed, BOD for NCF, Need to take more ownership on resolution"
      },
      {
            "query": "Pick Up",
            "score": 93,
            "comment": "Cx had returned a order to us and didn't receive any update after pick up so contacted us to know the update on it. \n\nJC tried to retain the cx however later as required by the cx had a check over the details and accurate follow up was done. \n\nEnsure to have a further follow up on it to have it reso"
      },
      {
            "query": "Delivery Related",
            "score": 100,
            "comment": "Cx had a order placed for which the delivery was delayed since 2 weeks. \n\nJC had a check over the details did top up on the existing concern ensuring the dispatch is done at the earliest. \n\nOverall a good call."
      },
      {
            "query": "Order Status",
            "score": 0,
            "comment": "Cx has placed an Order and the delivery date was on 06th March and needs the order to be delivered on 05th March since it was an engagement ring and the same cant been delivered but the JC informed that Order will be dispatched nd delivered with in 2-3 working days and it was an wrong commitment and"
      },
      {
            "query": "Refund Status",
            "score": 57,
            "comment": "Cx needs the refund update for the RTO order and JC has checked the details and informed the details and Cx was looking for the immediate refund and Cx was extremely irate but the same cant bene done from our end since the RTO Confirmatoon is not shared and Cx need the same t be done asap on the sam"
      },
      {
            "query": "Repair status",
            "score": 100,
            "comment": "Cx called us back as he missed a call from the OB team for the repair charges.\n\nJC had a check of the message and informed that the repair is been delayed by 10 days. \n\nOverall a good call. \n\n(Failed to communicate in preferred language-BOD)"
      },
      {
            "query": "Refund",
            "score": 100,
            "comment": "Cx had a order cancelled post dispatch and it was almost 20 days yet he didn't receive the refund of it. \n\nJC had a check over the details and informed to have it priotrised by raising a reminder on te existing ticket. \n\nOverall a good call. \n\nEnsure a follow up is done and cx is provided with an up"
      },
      {
            "query": "Delivery related",
            "score": 93,
            "comment": "Cx had a order pkaced which was not delivered stating that the cx was unavilable were cx confirmed that the this was the false information. \n\nJC had a check over the details promptly raised a re-dispatch request and helped the cx. \n\nFailed to portray Empathy when necessary\n\n(Re-dispatch details don'"
      },
      {
            "query": "Store Order Cancellation",
            "score": 81,
            "comment": "Cx has placed an Store Order and she has cancelled the same . Cx needs the refund of the same but as per CL Policies the same will be only added in Cx Profile and for store order no refund or 15 days MB is applicable . JC informed the details and Cx was not happy with the update and JC informed that"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Cx said that the Order ha sbeen marked delivered but the Cx said that she has not received the Order delivered . JC checked and informed the details . Re dispatch details informed . TAT informed and due to the same Cx wish to have the Order Cancelled . Retention effort on call ."
      },
      {
            "query": "Refund Status",
            "score": 91,
            "comment": "Cx has placed an Order and denied the delivery the delivery , product has been delivered to MUM FC and Cx needs the refund asap . JC informed the details anmd the TAT for the refund , Tone needs to be a little more better ."
      },
      {
            "query": "Order Status",
            "score": 70,
            "comment": "Order Delivery Status , JC checked and informed the Cx that the product is getting delivered and the the EDD is on 10th April and Cx was irate and asked to hav ethe Order Cancelled and JC worked on retention and Order was cancelled and Cx has placed an New Ordrer . Cx was asking for the refund of an"
      },
      {
            "query": "Cancellation",
            "score": 100,
            "comment": "Cx want to go with the product and dnt want to have the Order cancelled . Later due to delay in delivery date Cx asked to cancel and refund and JC tried for retention but Cx needs refund only . Refund KF was cancelled due to DLINK was not done and refund raised again by Service team . BOD ."
      },
      {
            "query": "Order Status",
            "score": 53,
            "comment": "Cx is confortable in Telugu and JC Called and Cx informed that she has placed an Order for GC and the same is not getting delivered from a while , Cx wants to cancel the Order and process the refund . JC dropped an email to the store and no update received till date ad JC missed to follow p the same"
      },
      {
            "query": "Order Status",
            "score": 100,
            "comment": "Cx had a order placed for which the delivery date was missed and yet the product was not dispatched. \n\nJC had a check over the details and informed that reason for the delay and needful was done. \n\nOverall a good call \n\nHowever Timely apology required, tagging could be under Production delay / delay"
      },
      {
            "query": "Xclusive points",
            "score": 95,
            "comment": "Cx had received a call from the CL team and so called us back to know about it. \n\nHowever as she had a concern about the review points, JC had a check and made a follow up call with an update. \n\nOverall a good call. \n\nFailed to check further assistance \n\nTagging to be under Xclusive points, IVR - BO"
      },
      {
            "query": "Delivery related",
            "score": 73,
            "comment": "Cx had contacted us with the concern to deny the delivery of her order and also was willing to return on product back to us. \n\nJC had a check and helped the cx on it. \n\nFailed to portray Empathy when necessary, IVR transfer missed, Could have confirmed the order ID and Keep adding the alternative no"
      }
],
    paramCaseMap: {"ss": [1, 2, 6, 7, 12, 15, 16, 18, 21, 23, 24], "prob": [3, 8, 11, 24], "sol": [11, 19, 21], "fu": [7, 19, 21], "tag": [1, 9, 12]},
  },
};

const PARAM_LABELS = {
  ss: 'Soft Skills',
  sol: 'Solution',
  prob: 'Probing',
  tag: 'Tagging',
  fu: 'Follow Up',
};

const PARAM_COLORS = {
  ss: '#7B2D8B',
  sol: '#2196F3',
  prob: '#FF9800',
  tag: '#4CAF50',
  fu: '#F44336',
};
