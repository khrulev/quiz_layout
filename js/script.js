$(document).ready(function () {

    // Temporary for DEMO Layout
    // Function - redirect on 'radio click'
    $('input[type="radio"]').on('change', function () {

        let currentPath = window.location.pathname;
        let nextPath = '';

        let idx=0;
        for (let i=0; i<currentPath.length; i++){
            if (currentPath.charAt(i)=='/') idx = i;
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
            default:
                nextPath = '/step2.html';
        }
        window.location.href = window.location.origin + nextPath;
    });

});





