angular.module('starter.controllers', [])

.controller('SongDetailController', function($scope, $stateParams, $localStorage, $sce) {
  var songs = $localStorage.songs;

  $scope.song = $localStorage.songs.filter(function(item) {
    return item._id == $stateParams.id;
  })[0];

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.$on('$ionicView.afterEnter', function() {
    $scope.soundcloud_url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + $scope.song.soundcloud + '&amp;color=ff5500&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false';
  })
})
.controller('FeedController', function($scope) {
  $scope.news = [
    {
      '_id': '1',
      'title': '7 Nisan Konser',
      'description': 'Unutma, 7 Nisan\'da Bronx Pi Sahne\'deyiz!!!'
    },
    {
      '_id': '2',
      'title': '7 Nisan Konser - Kaza Raporu',
      'description': '7 Nisan\' da, kardeş grup Kaza Raporu ile Bronx Pi Sahne\'deyiz. Kavuşalım mı? Sarılırız biraz hem.'
    }
  ];

  localStorage.setItem('feeds', JSON.stringify($scope.news));
})
.controller('SongsController', function($scope, $state, $localStorage) {

  $scope.go = function(song) {
    $state.go('tab.song-detail', {
      song: song
    });
  };

  $scope.songs = [
    {
      '_id': '1',
      'title': 'Sevsene Beni',
      'album': 'Şimdi',
      'image': 'http://4.bp.blogspot.com/-b5fwiOjOTZ0/Uhh5rCR6XVI/AAAAAAAAEtI/9-fHH9Le02w/s1600/Yedinci+Ev+-+%C5%9Eimdi.jpg',
      'soundcloud': 121245996,
      'lyrics':
        'Kalbimde dolaşmadan benim diyemezsin bana<br>' +
        'Ruhuma karışmadan canım diyemezsin bana<br><br>' +
        'Tabii ki sen bana çok görüyorsun<br>' +
        'Benden çok biliyorsun ya nasıl sevilir<br>' +
        'Rüyalarla yaşıyorum ben aşkını<br>' +
        'Ama bak sen seviliyorsun bense bekliyorum<br><br>' +
        'Elinden geliyorsa azıcık sevsene beni<br>' +
        'İçinden geliyorsa tutup öpsene beni'
    },
    {
      '_id': '2',
      'title': 'Anlat Ona',
      'album': 'Şimdi',
      'image': 'http://4.bp.blogspot.com/-b5fwiOjOTZ0/Uhh5rCR6XVI/AAAAAAAAEtI/9-fHH9Le02w/s1600/Yedinci+Ev+-+%C5%9Eimdi.jpg',
      'soundcloud': '',
      'lyrics': ''
    },
    {
      '_id': '3',
      'title': 'Utanıyorum Halimden',
      'album': 'Şimdi',
      'image': 'http://4.bp.blogspot.com/-b5fwiOjOTZ0/Uhh5rCR6XVI/AAAAAAAAEtI/9-fHH9Le02w/s1600/Yedinci+Ev+-+%C5%9Eimdi.jpg',
      'soundcloud': '',
      'lyrics': ''
    },
    {
      '_id': '4',
      'title': 'Birileri Anlatsın Bana',
      'album': 'Şimdi',
      'image': 'http://4.bp.blogspot.com/-b5fwiOjOTZ0/Uhh5rCR6XVI/AAAAAAAAEtI/9-fHH9Le02w/s1600/Yedinci+Ev+-+%C5%9Eimdi.jpg',
      'soundcloud': '',
      'lyrics': ''
    },
    {
      '_id': '5',
      'title': 'Elinde Sonunda',
      'album': 'Şimdi',
      'image': 'http://4.bp.blogspot.com/-b5fwiOjOTZ0/Uhh5rCR6XVI/AAAAAAAAEtI/9-fHH9Le02w/s1600/Yedinci+Ev+-+%C5%9Eimdi.jpg',
      'soundcloud': '',
      'lyrics': ''
    }
  ];

  $localStorage.songs = $scope.songs;
})

.controller('ConcertsController', function($scope) {
  $scope.concerts = [
    {
      '_id': '1',
      'title': 'Yedinci Ev @ Bronx',
      'venue': 'Bronx Pi Sahne',
      'time': '7 Nisan, 21:00',
      'image': 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/12985578_1010237065692433_8662171382593241167_n.jpg?oh=d1748128e8744895ec3c9a38f5d9e593&oe=57A36DF3'
    }
  ]

})
.controller('AboutController', function($scope, $ionicActionSheet) {
  $scope.showModal = function() {
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'iTunes' },
       { text: 'Spotify' },
       { text: 'Deezer' },
       { text: 'TTnet Müzik' },
       { text: 'Turkcell Müzik' }
     ],
     titleText: 'Şarkılarımızı aşağıdaki kaynaklardan indirebilir veya dinleyebilirsiniz.',
     cancelText: 'İptal',
     cancel: function() {
          // add cancel code..
    },
     buttonClicked: function(index) {
       hideSheet();
       
       var links = [
         'http://goo.gl/165O4D',
         'http://goo.gl/DDhBGi',
         'http://goo.gl/JhYZWv',
         'http://goo.gl/OKsbYP',
         'http://goo.gl/bN1jYt'
       ]

       var url = links[index];

       SafariViewController.isAvailable(function (available) {
        if (available) {
          SafariViewController.show({
                url: url,
                hidden: false,
                animated: false,
                transition: 'curl',
                tintColor: "#ff0000"
              },
              function(result) {},
              function(msg) {}
          )
        } else {
          window.open(url, '_blank', 'location=yes');
        }
      })

       return true;
     }
   });
  };
})



;
