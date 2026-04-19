import random


def generate_phash():
    return {"phash": hex(random.getrandbits(64)), "method": "perceptual hash"}
