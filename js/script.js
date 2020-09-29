$(document).ready(function () {

    // Temporary for DEMO Layout
    // Function - redirect on 'radio click'
    $('input[type="radio"]').on('change', function () {

        let currentPath = window.location.pathname;
        let currentHref = window.location.href;
        let nextPath = '';
        let nextHref = '';

        let idx=0;
        for (let i=0; i<currentPath.length; i++){
            if (currentPath.charAt(i)=='/') idx = i;
        }
        let lastPage = currentPath.substr(idx);

        switch (lastPage) {
            case '/index.html':
                nextPath = '/step2.html';
                nextHref = currentHref.replace(currentPath, nextPath);
                break;
            case '/step2.html':
                nextPath = '/step3.html';
                nextHref = currentHref.replace(currentPath, nextPath);
                break;
            case '/step3.html':
                nextPath = '/step4.html';
                nextHref = currentHref.replace(currentPath, nextPath);
                break;
            case '/step4.html':
                nextPath = '/step5.html';
                nextHref = currentHref.replace(currentPath, nextPath);
                break;
            case '/step5.html':
                nextPath = '/step6.html';
                nextHref = currentHref.replace(currentPath, nextPath);
                break;
            case '/step6.html':
                nextPath = '/step7.html';
                nextHref = currentHref.replace(currentPath, nextPath);
                break;
            case '/step7.html':
                nextPath = '/step8.html';
                nextHref = currentHref.replace(currentPath, nextPath);
                break;
            case '/step8.html':
                nextPath = '/step9.html';
                nextHref = currentHref.replace(currentPath, nextPath);
                break;
            case '/step8.html':
                nextPath = '/step10.html';
                nextHref = currentHref.replace(currentPath, nextPath);
                break;
            case '/step10.html':
                nextPath = '/step11.html';
                nextHref = currentHref.replace(currentPath, nextPath);
                break;
            case '/step11.html':
                nextPath = '/step12.html';
                nextHref = currentHref.replace(currentPath, nextPath);
                break;
            default:
                nextHref = currentHref + 'step2.html';
        }
        window.location.href = nextHref;
    });

});





