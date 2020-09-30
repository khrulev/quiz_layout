$(document).ready(function () {

    // Temporary ONLY for DEMO (Layout. Sprint 1)
    // Callback - Redirect on next demo page
    const goNextPageDEMO = function (evt) {
       
        evt.preventDefault();
        
        let currentPath = window.location.pathname;
        let nextPath = '';
        console.log(currentPath)
        let idx = 0;
        for (let i = 0; i < currentPath.length; i++) {
            if (currentPath.charAt(i) == '/') idx = i;
        }
        let lastPage = currentPath.substr(idx);

        switch (lastPage) {
            case '/index.html':
                nextPath = currentPath.replace(lastPage, '/step2.html');
                break;
            case '/step2.html':
                nextPath = currentPath.replace(lastPage, '/step3.html');
                break;
            case '/step3.html':
                nextPath = currentPath.replace(lastPage, '/step4.html');
                break;
            case '/step4.html':
                nextPath = currentPath.replace(lastPage, '/step5.html');
                break;
            case '/step5.html':
                nextPath = currentPath.replace(lastPage, '/step6.html');
                break;
            case '/step6.html':
                nextPath = currentPath.replace(lastPage, '/step7.html');
                break;
            case '/step7.html':
                nextPath = currentPath.replace(lastPage, '/step8.html');
                break;
            case '/step8.html':
                nextPath = currentPath.replace(lastPage, '/step9.html');
                break;
            case '/step8.html':
                nextPath = currentPath.replace(lastPage, '/step10.html');
                break;
            case '/step10.html':
                nextPath = currentPath.replace(lastPage, '/step11.html');
                break;
            case '/step11.html':
                nextPath = currentPath.replace(lastPage, '/step12.html');
                break;
            case '/step12.html':
                nextPath = currentPath.replace(lastPage, '/step13.html');
                break;
            case '/step13.html':
                nextPath = currentPath.replace(lastPage, '/step14.html');
                break;
            case '/step14.html':
                nextPath = currentPath.replace(lastPage, '/step15.html');
                break;
            case '/step15.html':
                let step = '/step17.html';
                if (evt.target.id == 'radio-1') step = '/step16.html'
                nextPath = currentPath.replace(lastPage, step);
                break;
            case '/step16.html':
                nextPath = currentPath.replace(lastPage, '/step17.html');
                break;
            default:
                nextPath = currentPath + '/step2.html';
        }
        window.location.href = window.location.origin + nextPath;
    };

    $('input[type="radio"]').on('change', goNextPageDEMO); //ONLY for DEMO 
    $('button').on('click', goNextPageDEMO); //ONLY for DEMO 
});





