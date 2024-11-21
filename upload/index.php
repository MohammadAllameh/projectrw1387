<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Upload File</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col">
                <form action="/upload.php" method="POST" enctype="multipart/form-data" id="upload">
                    <div class="form-group">
                        <label for="fileupload">File : </label>
                        <input type="file" id="fileupload" name="file" class="form-control-file">
                    </div>
                    <button class="btn btn-danger">submit</button>
                </form>
                <div class="mt-4 d-none" id="progress">
                    <div class="progress">
                        <div class="progress-bar" style="width: 25%">25%</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
    <script src="./script.js"></script>
</body>
</html>