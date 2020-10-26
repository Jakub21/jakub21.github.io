from time import sleep
import subprocess as sp

shp = sp.Popen('powershell shp ./preproc/index.shp ./index.html --watch')
sass = sp.Popen('powershell sass --watch ./preproc/sass/index.scss:./index.css')

while True:
  try: sleep(.5)
  except KeyboardInterrupt:
    print('Terminate')
    shp.terminate()
    sass.terminate()
    break
