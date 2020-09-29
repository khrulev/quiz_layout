$(document).ready(function () {
    // Temporary for DEMO Layout
    // Function - redirect on 'radio click'
    $('input[type="radio"]').on('change', function () {
        
        let currentPath = window.location.pathname;
        let nextPath = '';

        switch (currentPath) {
            case '/index.html':
                nextPath = '/step2.html';
                break;
            case '/step2.html':
                nextPath = '/step3.html';
                break;
            case '/step3.html':
                nextPath = '/step4.html';
                break;
            case '/step4.html':
                nextPath = '/step5.html';
                break;
            case '/step5.html':
                nextPath = '/step6.html';
                break;
            case '/step6.html':
                nextPath = '/step7.html';
                break;
            case '/step7.html':
                nextPath = '/step8.html';
                break;
            case '/step8.html':
                nextPath = '/step9.html';
                break;
            case '/step8.html':
                nextPath = '/step10.html';
                break;
            case '/step10.html':
                nextPath = '/step11.html';
                break;
            case '/step11.html':
                nextPath = '/step12.html';
                break;
        }

        window.location.href = window.location.href.replace(currentPath, nextPath);
    });

});





