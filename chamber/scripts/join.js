/*--------------------------------------------------------------
-----------------      MODAL MANAGING      ---------------------
--------------------------------------------------------------*/


const openNPO = document.querySelector('#openNPO');
const closeNPO = document.querySelector('#closeNPO');
const openBronze = document.querySelector('#openBronze');
const closeBronze = document.querySelector('#closeBronze');
const openSilver = document.querySelector('#openSilver');
const closeSilver = document.querySelector('#closeSilver');
const openGold = document.querySelector('#openGold');
const closeGold = document.querySelector('#closeGold');
const npoCard = document.querySelector('#npoCard');
const bronzeCard = document.querySelector('#bronzeCard');
const silverCard = document.querySelector('#silverCard');
const goldCard = document.querySelector('#goldCard')

function openClose(openBtn, closeBtn, modal) {
    openBtn.addEventListener('click', () => {
        modal.showModal();
    });

    closeBtn.addEventListener('click', () => {
        modal.close();
    });
}

openClose(openNPO, closeNPO, npoCard);
openClose(openBronze, closeBronze, bronzeCard);
openClose(openSilver, closeSilver, silverCard);
openClose(openGold, closeGold, goldCard);
