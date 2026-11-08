"""白黒ポートレート（赤フィルター風の白黒化＋S字トーン＋周辺減光）。色調のみ、顔は変えない。"""
from PIL import Image, ImageDraw, ImageFilter, ImageOps, ImageChops
import math
src=Image.open('original.jpg').convert('RGB').crop((135,90,535,590)).resize((640,800),Image.LANCZOS)
W,H=src.size
r,g,b=src.split()
gray=Image.merge('RGB',(r,g,b)).convert('L',(0.62,0.33,0.05,0))   # 赤フィルター：肌は明るく葉は暗く
def s_curve(v,k=1.0):
    x=v/255; y=1/(1+math.exp(-7*(x-.5))); y0=1/(1+math.exp(3.5)); y1=1/(1+math.exp(-3.5))
    return int(255*((y-y0)/(y1-y0)))
gray=gray.point(s_curve)
gray=gray.point(lambda v:int(10+v*(245-10)/255))                   # 黒は締めつつ潰しきらない
# 周辺減光
m=Image.new('L',(W,H),0); ImageDraw.Draw(m).ellipse([-W*.05,-H*.05,W*1.05,H*1.05],fill=255)
m=m.filter(ImageFilter.GaussianBlur(120))
dark=gray.point(lambda v:int(v*.72))
gray=Image.composite(gray,dark,m)
gray.save('H_face_mono.jpg',quality=93)
ImageOps.colorize(gray,black=(22,21,19),white=(250,248,243)).save('H_face_mono_warm.jpg',quality=93)
s=Image.new('RGB',(W*2+30,H+20),(250,248,243))
s.paste(gray.convert('RGB'),(10,10)); s.paste(Image.open('H_face_mono_warm.jpg'),(W+20,10)); s.save('face_compare.jpg',quality=88)
