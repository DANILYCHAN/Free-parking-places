switch(place) {
	case 0:
		switch(hours) {
			case 6:
				bk = Math.ceil(bk * 0.6);
			case 7:
				bk = Math.ceil(bk *0.52);
			case 8:
        if (minutes <= 30) {
          bk = Math.ceil(bk * 0.38);
        } else {
          bk = Math.ceil(bk * 0.25);
        };
      case 9:
      case 19:
      case 20:
        bk = Math.ceil(bk * 0.15);
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        bk = Math.ceil(bk * 0.015);
      case 21:
      case 22:
        bk = Math.ceil(bk * 0.3);
      case 23:
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        bk = Math.ceil(bk * 0.75);
		}
}
